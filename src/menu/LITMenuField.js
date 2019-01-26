import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Map } from 'immutable';
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, Spinner } from 'reactstrap';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image
import LITMenuItemView from './LITMenuItemView';
import { MENU_BILLING, MENU_INVOICE, MENU_DASHBOARD } from './LITMenuDefine';
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
        let current = this.current();
        let title = this.title(current);

        return (
            <Dropdown 
            size="sm"  
            isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret 
                color="primary"
                // style={{height: 25}}
                >
                {title}
                </DropdownToggle >
                <DropdownMenu>
                {this.items()}
                </DropdownMenu>
            </Dropdown>
                
        );
    }

    current() {
        let current = this.props.value;
        if (!current) return MENU_DASHBOARD;
        return current;
    }

    title(value) {
        let menu = [MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING];
        let titles = ["Dashboard", "Invoice", "Billing"];
        let idx = menu.indexOf(value);
        return titles[idx];
    }


    items() {
        let current = this.current();
        let menu = [MENU_DASHBOARD, MENU_INVOICE, MENU_BILLING];
        let titles = ["Dashboard", "Invoice", "Billing"];
        let arr = [];

        menu.forEach(
            (value, index)=>{
                let title = titles[index];
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