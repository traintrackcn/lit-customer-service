// import React from 'react';
import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import p from '../rPath';
import LITGETProjects from './LITGETProjects';
import local, { KEY_PRJ_DATA } from '../local';

export default class LITProjectReducer extends LITReducer{



    fetch() {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{

                console.log("r -> "+r);
                console.log("s -> "+s);

                var prjs = JSON.parse(local.get(KEY_PRJ_DATA));

                if (!prjs){
                  let res = await LITGETProjects();
                  prjs = res.projects;
                  local.set(KEY_PRJ_DATA, JSON.stringify(prjs));
                }
                
                // var res = await LITGETProjects();
                let collection = fromJS(prjs);
                s.set(p.prj.collection, collection);

                // console.log("collection.size ->", collection.size);

                if(collection.size > 0){
                  let defaultIdx = 0;
                  defaultIdx = 4;
                  s.set(p.prj.index, defaultIdx);
                  s.set(p.prj.value, collection.get(defaultIdx));
                }


                // console.log('state -> '+JSON.stringify(s.getState(), null, 2));
                
        
            }catch(e){
                console.log('e -> '+JSON.stringify(e, null, 2));

                // dispatch ( r.processing.DISMISS() );
                return e;
            }
            
            
        }

    }


    SET_DEMO_USER() {
      return {
        ns: this.ns,
        type: 'SET_DEMO_USER'
      };
    }


  main(state=Map(), action){

    state = super.main(state, action);

    if (!this.myAction(action)) return state;
    switch (action.type) {
      case 'SET_DEMO_USER':{
        // state = state.setIn(['user'], '100009201'); //n8
        state = state.setIn(['user'], '80000101'); //vbn
        state = state.setIn(['pwd'], 'Ab1234');
        return state;
      }
    }

    return state;
  }
}; 