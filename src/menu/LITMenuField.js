import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Map } from 'immutable';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, Spinner } from 'reactstrap';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image
import LITMenuItemView from './LITMenuItemView';
import { MENU_BILLING, MENU_INVOICE, MENU_DASHBOARD, MENU_APP_PREFERENCES, menuTitles, menuKeys, currentMenu } from './LITMenuDefine';
// import LITProjectField from '../project/LITProjectField';

class LITMenuField extends PureComponent {

    constructor() {
        super();
        this.state = {};
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        console.log('toggle');
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
          }));
    }

    render() {

        let prj = this.props.prj;

        if (!prj) return null;

        // let title = prj.get('name');
        let current = currentMenu(this.props.value);
        let title = this.title(current);

        return (
            <Dropdown 
            size="sm"  
            isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret 
                color="primary"
                style={{
                    fontWeight: 'bold',
                }}
                >
                {title}
                </DropdownToggle >
                <DropdownMenu>
                {this.items()}
                </DropdownMenu>
            </Dropdown>
                
        );
    }

    

    title(value) {
        // let titles = ["Dashboard", "Invoice", "Billing", "App Preferences"];
        let idx = menuKeys.indexOf(value);
        return menuTitles[idx];
    }


    items() {
        let current = currentMenu(this.props.value);
        // let menu = [MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING, MENU_APP_PREFERENCES];
        // let titles = ["Dashboard", "Invoice", "Billing"];
        let arr = [];

        menuKeys.forEach(
            (value, index)=>{
                let title = menuTitles[index];
                let key = value;
                let active = (key === current);
                arr.push(  
                    <LITMenuItemView 
                        key={key}
                        active={active}
                        title={title}
                        value={value}
                    />
                );
            }
        );

        

        // cols.push(</Row>);
        return arr;
    }


}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        prj: s.get(p.prj.value),
        value: s.get(p.menu)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITMenuField)