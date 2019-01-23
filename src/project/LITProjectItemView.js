import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { ListGroupItem } from 'reactstrap';

export default class LITProjectItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let idx = this.props.index;
        console.log('onclick -> '+idx);
        s.set(p.prj.index, idx);
    }

    render() {

        let active = this.props.active;
        let title = this.props.title;

        return (
            <ListGroupItem
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
            </ListGroupItem>
                
        );
    }
}
