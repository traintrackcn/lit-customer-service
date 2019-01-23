import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image
import LITMenuItemView from './LITMenuItemView';
import { MENU_BILLING, MENU_INVOICE, MENU_DASHBOARD } from './LITMenuDefine';

class LITMenuField extends PureComponent {

    constructor() {
        super();
    }

    render() {

        let idx = this.props.index;
        let collection = this.props.collection;

        if(!collection) return null;

        let prj = collection.get(idx);

        if (!prj) return null;

        let value = this.props.value;

        return (
            <div style={{padding: 10}}>
                
                <div style={{
                    paddingBottom: 5,
                    fontSize: 13,
                    color: '#666',
                }}>{prj.get('name')}</div>

                <Nav pills>
                        <LITMenuItemView 
                        title={"Dashboard"}
                        value={MENU_DASHBOARD}
                        current={value}
                        />

                    <LITMenuItemView 
                        title={"Invoice"}
                        value={MENU_INVOICE}
                        current={value}
                        />

                    <LITMenuItemView 
                        title={"Billing"}
                        value={MENU_BILLING}
                        current={value}
                        />

                </Nav>

            </div>
        );
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        collection: s.get(p.prj.collection),
        index: s.get(p.prj.index),
        value: s.get(p.menu)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITMenuField)