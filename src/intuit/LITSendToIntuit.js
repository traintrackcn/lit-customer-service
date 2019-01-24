import React, { PureComponent } from 'react';
import { OauthSender } from 'react-oauth-flow';
import s from '../store';
import p from '../rPath';
import { connect } from 'react-redux';  
import { scopes, clientId, clientSecret, authorizeUrl, redirectUrl, tokenUrl } from './intuit';
import { Spinner } from 'reactstrap';
 
class SendToIntuit extends PureComponent {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(){

    console.log('onclick()');

    var ClientOAuth2 = require('client-oauth2');
 
    var auth = new ClientOAuth2({
      clientId: clientId(),
      clientSecret: clientSecret(),
      accessTokenUri: tokenUrl(),
      authorizationUri: authorizeUrl(),
      redirectUri: redirectUrl(),
      scopes: scopes,
      state: '{"from":"billing"}'
    });


    window.open(auth.code.getUri())

  }

  render() {

    return (

      <div onClick={this.onClick}>

        connect to intuit
      </div>

  
    );
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
      // config: s.get(p.intuit.config)
  }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps)(SendToIntuit)