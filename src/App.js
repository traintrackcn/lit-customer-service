import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LITMain from './LITMain';
import { removeToken, getToken } from './local';
import s from './store';
import p from './rPath';

export default class App extends PureComponent {

    constructor(props) {
      super(props);

      let token = getToken();

      if (token){
        s.set(p.token, token); 

        // removeToken(); //for testing purpose
      }

      // if (token) {
      //   s.set(p.token, token);
      // }

    }
   
    render() {

      return (
        <BrowserRouter>    
          <LITMain />
        </BrowserRouter>
      );

    }
  }