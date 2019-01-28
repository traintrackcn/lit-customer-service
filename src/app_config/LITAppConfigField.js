import React, { PureComponent, Component } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { getConfig } from '../project/prj-utils';
import LITGETConfig from './LITGETConfig';
import LITPUTConfig from './LITPUTConfig';
import { Row, Container, Spinner, Col } from 'reactstrap';
import LITAppConfigDetail from './LITAppConfigDetail';
import Switch from 'react-ios-switch';
import mainS from '../css/main.module.css';
import '../index.css';
import { isActive, isInternal } from './LITAppConfigDefine';

class LITAppConfigField extends PureComponent {

    constructor(){
        super();
        this.state = {};
        this.onClick = this.onClick.bind(this);
        this.onCloseDetail = this.onCloseDetail.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    companyCode() {
        let prj = this.props.prj;
        if(!prj) return;

        return getConfig(prj, 'code');

    }

    async componentWillMount(){
        console.log('LITAppConfigField componentWillMount()');
        const company = this.companyCode();
        const platform = this.props.platform;

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
        const platform = this.props.platform;
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
        if (!this.state.state) return (<Spinner type='grow' color='primary' />);

        // let match = this.props.match;
        // let params = match.params;
        let category = this.props.menu;
        // let platform = this.props.platform;
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
                    <LITAppConfigDetail 
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
        category: s.get(p.appConfig.category),
        platform: s.get(p.appConfig.platform),
        prj: s.get(p.prj.value)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigField)



class LITComponent extends Component {


    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onSwitch = this.onSwitch.bind(this);
        this.onClickSwitchContainer = this.onClickSwitchContainer.bind(this);
    }

   
    onClick(){
        const value = this.props.value;
        const key = this.props.theKey;
        if (this.props.onClick) this.props.onClick(key, value);
    }

    onClickSwitchContainer(){
        this.onSwitch();
    }

    async onSwitch(){

        console.log('onSwitch()');
    
        const state = this.props.state;

        if (this.props.onSave){
            
            const value = this.props.value;
            let newState = Object.assign({}, this.state);
            value.active = !value.active
            newState.active = value.active;
            this.setState(newState);

            this.props.onSave(state);

        }
        
    }


    render() {

        const value = this.props.value;
        const key = this.props.theKey;
        
        const title = this.props.theKey;
        const description = value.description;
        let active = isActive(key, value);
        let internal = isInternal(key);
        let stateStyle = active?mainS.active:mainS.inactive;
        
        return (
            <Col 
                xs="6" sm="3"
                    style={{
                    border:'3px solid #FFF',
                    backgroundColor: 'white',
                }}>
                    
                    <div className={['app-pref-container', stateStyle, mainS.disableTextSelection].join(' ')} onClick={this.onClick}>
                        <div className={['app-pref-title'].join(' ')}>
                            {title}
                        </div>
                        <p className={'app-pref-description'}>
                            {description}
                        </p>
                    </div>

                    <div style={{
                            border: '1px solid #4C4C4C',
                            borderTopWidth: 0,
                            borderRadius: '0px 0px 4px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            height: 45,
                        }}
                        // onClick={this.onClickSwitchContainer}
                        >
                    {
                        !internal &&    
                        <Switch
                            style={{
                                marginRight: 10,
                            }}
                            checked={active}
                            onChange={this.onSwitch}
                            // onClick={this.onSwitch}
                        />
                    }


                    {
                        internal &&    
                        <div style={{marginRight: 10, color: '#999', }}>Internal</div>
                    }
                    
                    </div>

                </Col>
        );
    }
}