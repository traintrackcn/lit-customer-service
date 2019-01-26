import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { DropdownItem } from 'reactstrap';

export default class LITProjectItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let idx = this.props.index;
        let value = this.props.value;
        // console.log('onclick -> '+idx);
        s.set(p.prj.index, idx);
        s.set(p.prj.value, value);
    }

    render() {

        let active = this.props.active;
        let title = this.props.title;

        title = title.replace(/Development -/i, 'Dev -');

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
}
