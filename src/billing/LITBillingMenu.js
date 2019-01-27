import React, { PureComponent } from 'react';
import menuS from '../css/menu.module.css';
import { connect } from 'react-redux';

class LITBillingField extends PureComponent {
    
    render() {
        return (
            <div className={[menuS.subContainer].join(' ')}>
            <span className={[menuS.sub, menuS.selected].join(' ')}>2018.9~2018.12 (Elite)</span>
            <span className={[menuS.sub, menuS.normal].join(' ')}>2017.8~2017.8 (Basic)</span>
        </div>
        )
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITBillingField)