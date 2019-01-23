import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LITMain from './LITMain';

export default class App extends PureComponent {

    constructor(props) {
      super(props);
    }
   
    render() {

      return (
        <BrowserRouter>    
          <LITMain />
        </BrowserRouter>
      );

    }
  }