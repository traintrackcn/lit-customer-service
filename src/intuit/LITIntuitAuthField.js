import React, { PureComponent } from 'react';
import { OauthSender } from 'react-oauth-flow';
import s from '../store';
import p from '../rPath';
import { connect } from 'react-redux';  
import intuit from './intuit';
import { Spinner, Button } from 'reactstrap';
import local, {KEY_INTUIT_TOKEN_DATA} from '../local';
import LITGETCompanyInfo from './LITGETCompanyInfo';
 
class LITIntuitAuthField extends PureComponent {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }

  onClick(){
    window.location = intuit.auth().code.getUri();
  }

  async componentDidMount(){

    // local.remove(KEY_INTUIT_TOKEN_DATA);
    
    try{
      this.setState({
        processing: true
      });

      let accessToken = await intuit.accessToken();
      
      this.setState({
        processing: false,
        accessToken: accessToken
      });
    // user = await user.refresh();
      console.log('accessToken -> ', accessToken);
      console.log('realmId -> ', intuit.realmId());

      try{
        await LITGETCompanyInfo();
      }catch(e){
        console.log('get company info e -> ', JSON.stringify(e, null, 2));
      }

    }catch(e){
      console.log('retrieve accessToken failed -> ', JSON.stringify(e, null, 2));
      this.setState({
        processing: false,
      });
    }
    
  }

  render() {

    const accessToken = this.state.accessToken;


    if (this.state.processing){
      return (
        <Spinner />
      );
    }

    if (accessToken){
      return (<div>
        authorized by intuit
      </div>);
    }


    return (

      <Button color="primary" onClick={this.onClick}>Connect to Intuit</Button>

    );
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
  };
}

//   const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps)(LITIntuitAuthField)