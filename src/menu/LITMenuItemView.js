

import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
// import { NavItem, NavLink } from 'reactstrap';
import { DropdownItem } from 'reactstrap';
import { MENU_DASHBOARD } from './LITMenuDefine';

export default class LITMenuItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let value = this.props.value;
        s.set(p.menu, value);
        // console.log('menu -> '+this.props.title);
    }


    render() {

        let active = this.props.active;
        let title = this.props.title;

        return (
            <DropdownItem
                // tag="a" href="javascript:alert()"
                active={active}
                // action
                // tag="button" action
                style={{
                    padding: 7,
                    cursor: 'pointer',
                    fontSize: 14,
                    color: active?'white':'#333',
                }}
                onClick={this.onClick}
            >
                {title} 
                {/* <Badge pill>14</Badge> <Badge pill>ios</Badge> */}
            </DropdownItem>
                
        );
    }

    // render() {
    //     let value = this.props.value;
    //     let current = this.props.current;

    //     if (!current) current = MENU_DASHBOARD;


    //     let active = (current===value);
    //     let title = this.props.title;

    //     return (
    //         <NavItem>
    //             <NavLink href="#" active={active} onClick={this.onClick}>{title}</NavLink>
    //         </NavItem>
                
    //     );
    // }
}
