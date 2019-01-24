import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
import s from '../store';
import p from '../rPath';
import { authorizeUrl, clientId, clientSecret, tokenUrl, redirectUrl, scopes } from './intuit';
import { connect } from 'react-redux';

// import Facebook from 'react-oauth2';
 
class LITReceiveFromIntuit extends Component {

    constructor(){
        super();
        // this.handleSuccess = this.handleSuccess.bind(this);
        // this.handleError = this.handleError.bind(this);
        // this.tokenFn = this.tokenFn.bind(this);
    }

    
    async componentDidMount(){

        console.log('this.props.location -> ', JSON.stringify(this.props.location, null, 2));
        console.log('window.location -> ', window.location);
        var uri = window.location.href;
        console.log('uri ->', uri);
        // return;

        var ClientOAuth2 = require('client-oauth2')
        var auth = new ClientOAuth2({
            clientId: clientId(),
            clientSecret: clientSecret(),
            accessTokenUri: tokenUrl(),
            authorizationUri: authorizeUrl(),
            redirectUri: redirectUrl(),
            scopes: scopes,
            state: '{"from":"billing"}'
          });

          let user = await auth.code.getToken(uri);

          console.log(user);

          user.refresh().then(function (updatedUser) {
            console.log(updatedUser !== user) //=> true
            console.log(updatedUser.accessToken)
          })

            // .then(function (user) {
            // console.log(user) //=> { accessToken: '...', tokenType: 'bearer', ... }

            // });
    }
 
    render() {
        return (
            <div>paring oauth2 callback</div>
        )
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        config: s.get(p.intuit.config)
    }
  }
  
  //   const mapDispatchToProps = { increment, decrement, reset }
  
  export default connect(mapStateToProps)(LITReceiveFromIntuit)