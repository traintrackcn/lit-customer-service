import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';

class LITInvoiceField extends PureComponent {

    constructor() {
        super();
    }

    render() {
        return (
            <div style={{padding: 10}}>
                LITInvoiceField Field

            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITInvoiceField)