import React, {PureComponent} from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { platforms } from './LITAppConfigDefine';
import p from '../rPath';
import s from '../store';
import '../index.css';
import { connect } from 'react-redux';


class LITPlatformDropdown extends PureComponent{

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


        platforms.forEach(platform => {
            let title = platform;
            let key = platform;
            let value = platform;
            let active = this.props.value === value;
            arr.push(  
                <ItemView 
                    key={key}
                    index={key}
                    active={active}
                    title={title}
                    value={value}
                />
            );
        });

        // cols.push(</Row>);
        return arr;
    }

}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        value: s.get(p.appConfig.platform)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITPlatformDropdown)



class ItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let value = this.props.value;
        s.set(p.appConfig.platform, value);
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