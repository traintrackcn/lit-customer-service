import React, {PureComponent} from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import p from '../rPath';
import s from '../store';
import '../index.css';
import { BILLING_PERIODS } from './LITBillingDefine';
// import { connect } from 'react-redux';
// import { prj_getPlans } from '../project/prj-utils';


export default class LITPeriodDropdown extends PureComponent{

    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        console.log('toggle');
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
          }));
    }

    render() {
        console.log('render()');
        let title = this.props.value;
        return(
            <Dropdown size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle} className='platform-dropdown'>
        <DropdownToggle caret 
        style={{
            backgroundColor: '#007BFF',
            borderWidth: 0,
        }}
        // color="primary"
        >
          {title}
        </DropdownToggle >
        <DropdownMenu>
          {this.items()}
        </DropdownMenu>
      </Dropdown>
        );
    }


    items() {

        let arr = [];
        
        BILLING_PERIODS.forEach(value => {
            let active = this.props.value === value;
            arr.push(  
                <ItemView 
                    key={value}
                    active={active}
                    title={value}
                    value={value}
                />
            );
        });

        return arr;
    }

}



class ItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let value = this.props.value;
        s.set(p.billing.period, value);
    }

    render() {

        let active = this.props.active;
        let title = this.props.title;

        // title = title.replace(/Development -/i, 'Dev -');

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