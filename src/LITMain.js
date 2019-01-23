import React, { PureComponent } from 'react';


import LITSignIn from './sign_in/LITSignIn';
import {getToken, removeToken} from './session';
import LITAuthorizedMain from './LITAuthorizedMain';


export default class LITMain extends PureComponent {

    constructor() {
        super();

        // removeToken();

        this.state = {
            token: getToken()
        };


        removeToken();
    }



    render() {

        let token = this.state.token;

        return (
            <div>
            
            { 
                token &&
                <LITAuthorizedMain />
            }
            
            {
              !token &&
              <LITSignIn />
            }
            

            </div>
            
        );
    }
}