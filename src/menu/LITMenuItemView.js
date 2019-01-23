

import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { NavItem, NavLink } from 'reactstrap';
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
        let value = this.props.value;
        let current = this.props.current;

        if (!current) current = MENU_DASHBOARD;


        let active = (current===value);
        let title = this.props.title;

        return (
            <NavItem>
                <NavLink href="#" active={active} onClick={this.onClick}>{title}</NavLink>
            </NavItem>
                
        );
    }
}
