import React, { PureComponent } from 'react';
import LITSignIn from './sign_in/LITSignIn';
import LITAuthorizedMain from './LITAuthorizedMain';
import s from './store';
import p from './rPath';
import { connect } from 'react-redux';

class LITMain extends PureComponent {

    render() {

        let userId = this.props.userId;

        if (userId) return (<LITAuthorizedMain />);

        return (<LITSignIn />);

    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    let userId = s.get(p.user.id);
    return {
        userId: userId
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
  export default connect(
    mapStateToProps
    // mapDispatchToProps
  )(LITMain)