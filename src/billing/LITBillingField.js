import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import SendToIntuit from '../intuit/LITSendToIntuit';

class LITBillingField extends PureComponent {

    // constructor() {
    //     super();
    // }

    async componentDidMount() {
        // let e = s.dispatch(r.intuit.fetchConfig());
    }

    render() {
        return (
            <div style={{padding: 10}}>
                Billing Field
                <SendToIntuit />
            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITBillingField)