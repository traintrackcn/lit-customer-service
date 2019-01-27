import React, { PureComponent } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
import LITGETConfig from './LITGETConfig';
import LITPUTConfig from './LITPUTConfig';
import { Row, Container, Spinner } from 'reactstrap';
import LITComponent from './component/LITComponent';
import LITComponentDetail from './component/LITComponentDetail';

class LITAppConfigField extends PureComponent {

    constructor(){
        super();
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this.onCloseDetail = this.onCloseDetail.bind(this);
        this.onSave = this.onSave.bind(this);
        this.platform = 'rn';
    }

    companyCode() {
        let prj = this.props.prj;
        if(!prj) return;

        return getConfig(prj, 'code');

    }

    async componentWillMount(){
        console.log('LITAppConfigField componentWillMount()');
        const company = this.companyCode();
        const platform = this.platform;

        const state = await LITGETConfig({company, platform});

        this.setState({
            'state': state
        });
    }

    async componentWillReceiveProps(nextProps){


        console.log('LITAppConfigField componentWillReceiveProps()');
        

    }

    async onSave(state){
        const company = this.companyCode();
        const platform = this.platform;
        await LITPUTConfig({state, platform, company})
    }

    async componentWillUpdate() {
        console.log('componentWillUpdate()');
    }


    onClick(key, value){
        this.setState({
            value: value,
            key: key,
            openDetail: true
        });

    }

    onCloseDetail(){
        // let newState = Object.assign({}, this.state);
        // newState.openDetail = false;
        this.setState({
            openDetail: false
        });
    }       

    render() {
        const state = this.state.state;
        if (!this.state.state) return (<Spinner type='grow' />);

        // let match = this.props.match;
        // let params = match.params;
        let category = this.props.submenu;
        if (!category) return null;

        const collection = state[category]
        const keys = state[category+'Keys'];

        console.log('render()');

        // if (!component) return null;
        return (
            <Container fluid style={{
                // border:'solid 1px', 
                padding: 0}}>
            <Row noGutters style={{
                // border: '5px solid #999'
            }}>
                {this.cols(collection, keys)}

                {
                    this.state.value &&
                    <LITComponentDetail 
                        state={this.state.state}
                        value={this.state.value}
                        theKey={this.state.key}
                        isOpen={this.state.openDetail}
                        onClose={this.onCloseDetail}
                        onSave={this.onSave}
                    />
                }
                
                
            </Row>
            </Container>
        );
    }


    cols(collection ,keys) {
        let cols = [];
        keys.map((key, index) => {
            // console.log('key -> '+key);
            const value = collection[key];
            cols.push(  
                <LITComponent 
                state={this.state.state}
                key={key} 
                theKey={key}  
                value={value} 
                onClick={this.onClick}
                onSave={this.onSave}
                />
            );
        });

        // cols.push(</Row>);
        return cols;
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        submenu: s.get(p.submenu.value),
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigField)