// import React from 'react';
import { List, Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer'; 
import LITGETToken from './LITGETToken';
import LITGETUserInfo from '../network/LITGETUserInfo';
import { KEY_USER_DATA } from '../local';
import p from '../rPath';
import local from '../local';

export default class LITSignInReducer extends LITReducer{



    fetch({user, pwd}) {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{

                console.log("r -> "+r);
                console.log("s -> "+s);
                
                var resOfGETToken = await LITGETToken({
                    user: user, 
                    pwd: pwd
                });

                console.log('resOfGETToken ->', JSON.stringify(resOfGETToken, null, 2));
    
                if (resOfGETToken) {

                    s.set(p.user, fromJS(resOfGETToken) );

                    var resOfLITGETUserInfo = await LITGETUserInfo();
                    local.set(KEY_USER_DATA, JSON.stringify(resOfLITGETUserInfo));
                    s.set(p.user, fromJS(resOfLITGETUserInfo));
                
                }
        
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