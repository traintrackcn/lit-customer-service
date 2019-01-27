import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import LITBillingMenu from '../billing/LITBillingMenu';
import { currentMenu, MENU_BILLING } from './LITMenuDefine';

class LITSubMenuField extends PureComponent {

    // constructor() {
    //     super();
    // }

    async componentDidMount() {
        // let e = s.dispatch(r.intuit.fetchConfig());
    }

    render() {

        let menu = currentMenu(this.props.menu);

        // console.log(m);

        return (
            <div>
                {
                    menu === MENU_BILLING &&
                    <LITBillingMenu />
                }
                
            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        menu: s.get(p.menu)
    }
}
  
export default connect(mapStateToProps)(LITSubMenuField)