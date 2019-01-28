import React, { PureComponent } from 'react';
import { ModalFooter, Button } from 'reactstrap';
import LITCodeEditor from './LITCodeEditor';
import mainS from '../css/main.module.css';
import '../index.css';
import { isActive, isInternal } from './LITAppConfigDefine';
import { connect } from 'react-redux';
import s, {r} from '../store';
import p from '../rPath';

class LITAppConfigDetail extends PureComponent{


    constructor() {
        super();
        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onBack = this.onBack.bind(this);
        this.state = {};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }


      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    // resetState(){
    //     this.state.newRules = undefined;
    //     this.state.changed = undefined;
    // }


    onCodeChange({newValue, changed }){
        console.log("onCodeChange");
        this.setState({
            newRules: newValue, 
            changed: changed
        });
    }

    onBack(){
        s.dispatch(r.nav.POP());
    }

    async onSave(){
        const key = this.props.theKey;
        const newRules = this.state.newRules;

        console.log(key+' newRules -> '+JSON.stringify(newRules, null, 2));

        let category = this.props.category;
        console.log('key ->', key);
        s.set(p.appConfig.value.concat([category, key, 'rules']), newRules);

        this.setState({
            newRules: undefined, 
            changed: undefined
        });

        await s.dispatch(r.appConfig.put());

        
        
    }

    render() {

        console.log('LITAppConfigDetail render()');

        const key = this.props.theKey;
        const title = key;
        const active = this.props.active;
        const description = this.props.description;
        const rules = this.props.rules;

        let stateStyle = active?mainS.active:mainS.inactive;
       
        return (
            <div style={{
                width: '100%', 
                // height: containerH,
                // border: 'solid 3px red'
            }}
                >
                
                    <div className={["nav-bar"].join(' ')}>
                        <span onClick={this.onBack} className='back-btn'>Back</span>
                        <span className={[stateStyle, 'app-config-title'].join(' ')}>{title}</span>
                    </div>
                    
                    <div style={{height: '500px', width: '100%', padding: 10}}>

                    {
                        this.state.changed  &&

                        <Button color="primary" onClick={this.onSave}>Save</Button>
                    
                    }

                    {description}
                    <LITCodeEditor value={rules} onChange={this.onCodeChange}/>
                    
                    </div>
                    
                    
                        
                    
                
                </div>
        );
    }

}


const mapStateToProps = (state, ownProps) => {
    let appConfigValue = s.get(p.appConfig.value);
    let key = ownProps.theKey;
    let category = ownProps.category;
    let value = appConfigValue?appConfigValue.getIn([category, key]):undefined;

    // console.log('value -> ', JSON.stringify(value));
    // console.log('loading -> ', loading);
    let active = isActive(key, value);
    let description = value?value.get('description'):undefined;
    let rules = value?value.get('rules'):undefined;
 
    return {
        // value: value,
        rules: rules,
        active: active,
        description: description,
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigDetail)
