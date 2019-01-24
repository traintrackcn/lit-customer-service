import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import LITGETIssues from './LITGETIssues'
import { fromJS } from 'immutable';

class LITRecentIssueField extends PureComponent {

    constructor() {
        super();
        this.state = {};
        this.request = this.request.bind(this);
    }

    async componentWillMount(){
        console.log('LITRecentIssueField componentWillMount');
        this.request();
    }

    async request() {

        // console.log('this.props -> '+JSON.stringify(this.props, null, 2));

        let prj = this.props.prj;

        console.log('this.prj !== prj -> '+(this.prj !== prj));
        
        if (this.prj){
            console.log('this.prj -> ', this.prj.get('id'));
        }else{
            console.log('this.prj -> undefined');
        }

        if (prj){
            console.log('prj -> ', prj.get('id'));
        }else{
            console.log('prj -> undefined');
        }

        if (this.prj !== prj){
            console.log('detect new prj, will start request');
            this.prj = prj;
            // this.setState({collection: undefined});
            var res = await LITGETIssues(prj);
            this.setState({ collection: fromJS(res) })
            
        }
    }

    componentWillUpdate(){
        console.log('LITRecentIssueField componentWillUpdate');
        // this.setState({collection: undefined});
        // this.request();
        // this.state.collection = undefined;
        // this.request();
    }

    componentWillReceiveProps(){
        console.log('LITRecentIssueField componentWillReceiveProps');
    }

    componentDidUpdate(){
        console.log('LITRecentIssueField componentDidUpdate');
        this.request();
        this.state.collection = undefined;
    }

    render() {

        console.log('LITRecentIssueField render()');
        return (
            <div style={{
                // display: 'flex',
                // border: 'solid 1px',
                width: '100%',
                // flexDirection: 'row',
                padding: 10}}>
                {
                    this.items()
                }

            </div>
        );
    }

    items() {
        let collection = this.state.collection;
        // let collection;

        console.log('collection -> ', collection);

        if (!collection) {
            return <div style={{
                display:'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%', height: '100%'}}><Spinner color="primary" /></div>;
        }

        let arr = [];
        collection.map((value, key) => {
            // console.log('key -> '+key);
            // console.log('value -> '+value)
            let subject = value.get('subject');
            let id = value.get('id');
            // const value = collection[key];
            arr.push(  
                <div key={key} style={{
                    // width: 150,
                    // height: 200,
                    // border: 'solid 1px',
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 10,
                }}>#{id} <div style={{fontWeight: 'normal'}}>{subject}</div></div>
            );
        });

        // cols.push(</Row>);
        return arr;
    }
}


const mapStateToProps = (state, ownProps) => {
    let prj = s.get(p.prj.value);
    console.log('mapStateToProps prj -> ', JSON.stringify(prj, null, 2));
    return {
        prj: prj
    }
}

export default connect(mapStateToProps)(LITRecentIssueField)