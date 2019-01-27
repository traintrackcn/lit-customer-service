import React, { PureComponent } from 'react';
import s, {r} from './store';
import p from './rPath';
import { connect } from 'react-redux';
import { MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING, currentMenu, MENU_APP_PREFERENCES } from './menu/LITMenuDefine';
import LITDashboardField from './dashboard/LITDashboardField';
import LITInvoiceField from './invoice/LITInvoiceField';
import LITBillingField from './billing/LITBillingField';
import contentS from './css/content.module.css';
import LITAppConfigFNLoader from './app_config/LITAppConfigFNLoader';
// import { Switch, Route } from 'react-router-dom'

class LITContentField extends PureComponent {

    constructor() {
        super();
    }

    render() {

        let prj = this.props.prj;

        if (!prj) return null;

        let value = currentMenu(this.props.value);



        return (
            <div className={[contentS.main].join(' ')}>

            

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

                {
                    value === MENU_APP_PREFERENCES  &&
                    // <LITAppConfigField />
                    <LITAppConfigFNLoader />
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