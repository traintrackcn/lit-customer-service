// import React from 'react';
import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import p from '../rPath';


export default class LITIntuitReducer extends LITReducer{




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