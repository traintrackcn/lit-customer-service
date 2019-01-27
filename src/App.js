import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LITMain from './LITMain';
import { KEY_USER_DATA } from './local';
import s from './store';
import p from './rPath';
import local from './local';
import { fromJS } from 'immutable';

export default class App extends PureComponent {

    constructor(props) {
      super(props);


      console.log('local.get(KEY_USER_DATA) -> ', local.get(KEY_USER_DATA));

      let user = JSON.parse(local.get(KEY_USER_DATA));

      // console.log('user -> ', JSON.stringify(user, null, 2));

      if (user){
        s.set(p.user, fromJS(user) ); 

        //for testing purpose
        // local.remove(KEY_USER_DATA);
      }


    }
   
    render() {

      return (
        <BrowserRouter>    
          <LITMain />
        </BrowserRouter>
      );

    }
  }