import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
import s from '../store';
import p from '../rPath';
import { connect } from 'react-redux';  
import { scopes, clientId } from './intuit';
import { Spinner } from 'reactstrap';
 
class SendToIntuit extends Component {
  render() {

    let config = this.props.config;

    console.log('config -> '+JSON.stringify(config, null, 2))
    
    if (!config) return <Spinner />;

    let authorizeUrl = config.get('authorization_endpoint');
    // let tokenUrl = config.get('token_endpoint');
    // let clientId = ;
    let redirectUri = 'http://localhost:3000/intuit/callback';

    return (
      <OauthSender
        authorizeUrl={authorizeUrl}
        clientId={clientId()}
        redirectUri={redirectUri}
        state={{ from: '/settings' }}
        args={{ scope: scopes.join(' ') }}
        render={({ url }) => <a href={url}>Connect to Intuit</a>}
      />
    );
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
      config: s.get(p.intuit.config)
  }
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps)(SendToIntuit)