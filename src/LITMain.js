import React, { PureComponent } from 'react';
import LITSignIn from './sign_in/LITSignIn';
import LITAuthorizedMain from './LITAuthorizedMain';
import s from './store';
import p from './rPath';
import { connect } from 'react-redux';

class LITMain extends PureComponent {

    render() {

        let token = this.props.token;

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



const mapStateToProps = (state /*, ownProps*/) => {
    let token = s.get(p.token);
    return {
        token: token
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
  export default connect(
    mapStateToProps
    // mapDispatchToProps
  )(LITMain)