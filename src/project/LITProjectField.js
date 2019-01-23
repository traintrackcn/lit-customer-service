import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { ListGroupItem, ListGroup, Badge, Spinner } from 'reactstrap';
import LITProjectItemView from './LITProjectItemView';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

class LITProjectField extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    async componentDidMount(){
        
        let e = s.dispatch(r.prj.fetch());


    }

    onClick() {
        console.log('onclick');
    }

    render() {
        return (
            <ListGroup 
                flush
                style={{
                    padding: '10px',
                // border: '1px solid', 
                WebkitOverflowScrolling: 'touch',
                overflow: 'scroll', height: '100%'}}>


        <div style={{paddingBottom: '10px', fontWeight: 'bold', alignItems:'center', justifyContent: 'center'}}>
        <img src={logo} alt="Logo" style={{width: '30px', height: '30px'}}/>
        </div>
        
    

            {
                this.items()
            }
            </ListGroup>
                
        );
    }


    items() {
        let collection = this.props.collection;
        let idx = this.props.index;

        if (!collection) {
            return <div style={{
                display:'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%', height: '100%'}}><Spinner color="primary" /></div>;
        }

        let arr = [];
        collection.map((value, key) => {
            console.log('key -> '+key);
            console.log('value -> '+value)
            let title = value.get('name');
            // const value = collection[key];
            arr.push(  
                <LITProjectItemView 
                    index={key}
                    active={(key==idx)}
                    title={title}
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
    }
  }
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITProjectField)