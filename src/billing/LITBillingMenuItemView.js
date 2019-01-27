import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import menuS from '../css/menu.module.css';

export default class LITBillingMenuItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let value = this.props.value;
        s.set(p.submenu.value, value);
    }

    render() {

        let active = this.props.active;
        let title = this.props.title;
        var style = [menuS.sub, menuS.normal].join(' ');

        if (active){
            style = [menuS.sub, menuS.selected].join(' ');
        }
        // title = title.replace(/Development -/i, 'Dev -');

        return (
            <span className={style} onClick={this.onClick}>
                {title}
            </span> 
                
        );
    }
}
