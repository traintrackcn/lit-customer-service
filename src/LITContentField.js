import React, { PureComponent } from 'react';
import s, {r} from './store';
import p from './rPath';
import { connect } from 'react-redux';
import { MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING } from './menu/LITMenuDefine';
import LITDashboardField from './dashboard/LITDashboardField';
import LITInvoiceField from './invoice/LITInvoiceField';
import LITBillingField from './billing/LITBillingField';

class LITContentField extends PureComponent {

    constructor() {
        super();
    }

    render() {

        if (!this.props.prjCollection) return null;

        let value = this.props.value;

        if (!value) value= MENU_DASHBOARD;


        return (
            <div style={{padding: 10}}>
                {
                    value === MENU_DASHBOARD &&
                    <LITDashboardField />
                }

                {
                    value === MENU_INVOICE &&
                    <LITInvoiceField />
                }

                {
                    value === MENU_BILLING &&
                    <LITBillingField />
                }

            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        value: s.get(p.menu),
        prjCollection: s.get(p.prj.collection)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITContentField)