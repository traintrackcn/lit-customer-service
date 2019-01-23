import React from 'react'
import { Map, List, OrderedMap } from 'immutable';

export default class LITReducer {

    constructor(){
        const uuid = this.constructor.name+'-'+Math.floor(Math.random()*100000000);
        this.ns = uuid; //namespace
        this.main = this.main.bind(this);
        this.myAction = this.myAction.bind(this);
        this.reducer = this.reducer.bind(this);
        this.subReducers = {}; // sub reducers;
        // console.log('uuid -> '+uuid);
        // this.store
        // this.r = r;
    }

    RESET(newState){
        return {
            ns: this.ns,
            type: 'RESET',
            newState: newState,
        };
    }

    refinePath(path){
         // console.log('path -> '+path);

         if (!path) throw { 'reason': 'path is not available for reducer'};

         if (path.path){ //may be a LITPath Object
             path = path.path;
         }
 
         if (path[0] === 'r') path = path.slice(1); //remove 'r' for SET action

         return path;
    }
    
    SET(path, value) {

        path = this.refinePath(path);
        // console.log('ns -> '+this.ns);
        return {
            ns: this.ns,
            type: 'SET',
            value: value,
            path: path,
        };
    }

    DELETE(path) {

        path = this.refinePath(path);
        // console.log('ns -> '+this.ns);
        return {
            ns: this.ns,
            type: 'DELETE',
            path: path,
        };
    }

    reducer(state, action) {

        // return undefined;
        // console.log('running main() -> '+this.ns+' '+' myAction -> '+this.myAction(action)+' action -> '+'['+action.type+'] '+action.ns);
        state = this.main(state, action);
        
        // run sub reducers
        Object.keys( this.subReducers ).forEach( (key) => {

            // console.log('key -> '+key);
            const subR = this.subReducers[key];
            // console.log('running sub() -> '+subR.ns);


            const subStateOld = state.get(key);
            const subState = subR.reducer( subStateOld, action );
            
            // console.log('subState -> '+subState+' not Map() '+(subState !== Map())+' not OrderedMap() '+(subState !== OrderedMap()));

            if (subStateOld === undefined){ //skip assgin default value for unused sub states
                if (subState === Map()) return;
                if (subState === OrderedMap()) return;
            }


            if (subState !== subStateOld){
                console.log('===== SET STATE for '+this.constructor.name+'.'+key);

                // console.log(this.constructor.name+'.'+key+' stateOld -> '+JSON.stringify(subStateOld, null, 2));
                // console.log(this.constructor.name+'.'+key+' stateNew -> '+JSON.stringify(subState, null, 2));
                // console.log('=======================================');
                   

                state = state.set(key, subState);
            }

        });

        return state;
    }

    myAction(action){
        // console.log('action.ns -> '+action.ns);
        // console.log('this.ns -> '+this.ns);
        if (action 
            && action.ns === this.ns) {
                return true;
        }
        return false;
            
    }

    main(state=Map(), action) {

        if ( !this.myAction(action) ) return state;

        console.log('=== ACTION -> '+this.ns+' '+action.type);
        // state = Map();
        switch(action.type){
            case 'SET':{
                state = state.setIn(action.path, action.value);
                return state;
            }

            case 'DELETE':{
                // console.log('action.path -> '+action.path);
                // console.log('before DELETE state -> '+state);
                state = state.deleteIn(action.path);
                // console.log('after DELETE state -> '+state);
                return state;
            }

            case 'RESET':{
                state = Map();
                let newState = action.newState;
                if (newState) {
                    if (newState.get('r')){
                        state = newState.get('r');
                    }else{
                        state = newState;
                    }
                   
                }
                return state;
            }
        }

        return state;

    }
    
}


