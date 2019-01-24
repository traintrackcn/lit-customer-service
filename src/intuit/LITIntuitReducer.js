// import React from 'react';
import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import p from '../rPath';


export default class LITIntuitReducer extends LITReducer{



    // fetchConfig() {
        
    //     return async (dispatch) => {

    //         const r = this.r;
    //         const s = this.s;

    //         try{

    //             console.log("r -> "+r);
    //             console.log("s -> "+s);
                
    //             var res = await LITGETIntuitConfiguration();
    //             // let collection = fromJS(res.projects);
    //             // console.log('res -> ', JSON.stringify(res, null, 2));
    //             s.set(p.intuit.config, fromJS(res));


    //             console.log('intuit state -> '+JSON.stringify(s.get(p.intuit), null, 2));
                
        
    //         }catch(e){
    //             console.log('e -> '+JSON.stringify(e, null, 2));

    //             // dispatch ( r.processing.DISMISS() );
    //             return e;
    //         }
            
            
    //     }

    // }



  main(state=Map(), action){

    state = super.main(state, action);

    if (!this.myAction(action)) return state;
    // switch (action.type) {
    //   case 'SET_DEMO_USER':{
    //     // state = state.setIn(['user'], '100009201'); //n8
    //     state = state.setIn(['user'], '80000101'); //vbn
    //     state = state.setIn(['pwd'], 'Ab1234');
    //     return state;
    //   }
    // }

    return state;
  }
}; 