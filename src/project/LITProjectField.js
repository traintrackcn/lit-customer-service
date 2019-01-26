import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Spinner } from 'reactstrap';
import LITProjectItemView from './LITProjectItemView';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

class LITProjectField extends PureComponent {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    async componentDidMount(){
        
        let e = s.dispatch(r.prj.fetch());


    }

    toggle() {
        console.log('toggle');
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
          }));
    }

    render() {

        let prj = this.props.value;

        if (!prj) return (<Spinner color="light" size="sm" type="grow" />);

        let title = prj.get('name');
        title = title.replace(/Development -/i, 'Dev -');

        return (
            <Dropdown size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret 
        style={{
            backgroundColor: '#2C3340',
            borderWidth: 0,
        }}
        color="primary"
        >
          {title}
        </DropdownToggle >
        <DropdownMenu>
          {/* <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem> */}
          {/* <DropdownItem>Quo Action</DropdownItem> */}
          {this.items()}
        </DropdownMenu>
      </Dropdown>
                
        );
    }


    items() {
        let collection = this.props.collection;
        let idx = this.props.index;

        if (!collection) {
            return null;
        }

        let arr = [];
        collection.map((value, key) => {
            // console.log('key -> '+key);
            // console.log('value -> '+value)
            let title = value.get('name');
            // const value = collection[key];
            arr.push(  
                <LITProjectItemView 
                    key={key}
                    index={key}
                    active={(key==idx)}
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
        collection: s.get(p.prj.collection),
        index: s.get(p.prj.index),
        value: s.get(p.prj.value),
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITProjectField)