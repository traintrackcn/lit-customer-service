import React, { PureComponent } from 'react';
import s, {r} from './store';
import p from './rPath';
import { connect } from 'react-redux';
import { MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING, currentMenu } from './menu/LITMenuDefine';
import LITDashboardField from './dashboard/LITDashboardField';
import LITInvoiceField from './invoice/LITInvoiceField';
import LITBillingField from './billing/LITBillingField';
// import { Switch, Route } from 'react-router-dom'
import menuS from './menu/menu.module.css';

class LITContentField extends PureComponent {

    constructor() {
        super();
    }

    render() {

        let prj = this.props.prj;

        if (!prj) return null;

        let value = currentMenu(this.props.value);



        return (
            <div style={{padding: 0, 
                width: '100%', 
                // border: '1px solid'
                }}>

            

                {/* <Switch>
                    <Route path="/intuit/callback" component={LITReceiveFromIntuit} />
                </Switch> */}

                {
                    value === MENU_DASHBOARD &&
                    <LITDashboardField/>
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
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITContentField)