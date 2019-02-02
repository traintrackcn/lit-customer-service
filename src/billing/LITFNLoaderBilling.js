import LITPureComponent from '../LITPureComponent';
import LITBillingNavigator from './LITBillingNavigator';
import LITBillingField from './LITBillingField';
import { connect } from 'react-redux';
import React from 'react';

class LITFNLoaderBilling extends LITPureComponent{

    render() {
        return (
            <div>
                <LITBillingNavigator />
                <LITBillingField />
            </div>
        )
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        // prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITFNLoaderBilling)