import React from 'react';
import { Button } from 'reactstrap';
import LITPureComponent from '../LITPureComponent';
import LITCodeEditor from './LITCodeEditor';
import mainS from '../css/main.module.css';
import '../index.css';
import { isActive, isInternal } from './LITAppConfigDefine';
import { connect } from 'react-redux';
import s, {r} from '../store';
import p from '../rPath';
import { fromJS } from 'immutable';

export default class LITAppConfigUnit extends LITPureComponent{

    constructor() {
        super();

        this.state = {};

        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onReceiveProps({theKey, value}){
        this.active = value?value.get('active'):false;
        this.description = value.get('description');
        // this.rules = value.get('rules');
        this.state.value = fromJS(value);
    }

    onCodeChange({newValue, changed }){
        console.log("onCodeChange");
        this.setState({
            newValue: newValue, 
            changed: changed
        });
    }


    async onSave(){
        const key = this.props.theKey;
        const newValue = this.state.newValue;

        let category = this.props.category;
        console.log('key ->', key);
        console.log('newValue ->', JSON.stringify(newValue, null, 2));

        s.set(p.appConfig.value.concat([category, key ]), fromJS(newValue));

        this.setState({
            newRules: undefined, 
            changed: undefined
        });

        s.dispatch(r.appConfig.put());

    }

    render() {

        console.log('LITAppConfigDetail render()');

        const key = this.props.theKey;
        const title = key;
        let stateStyle = this.active?mainS.active:mainS.inactive;
        let value = this.state.value;

        return (
            <div style={{
                width: '100%', 
                // height: containerH,
                // border: 'solid 3px red'
            }}
                >
                
                <div className={["app-config-unit-bar"].join(' ')}>

                    
                    <span className={['app-config-title', stateStyle].join(' ')}>
                        {title}
                    </span>

                    {
                        this.state.changed  &&

                        <Button color="primary" onClick={this.onSave}>Save</Button>
                    
                    }


                </div>
                
                <div style={{height: '50vh', width: '100%'}}>

                    

                    <LITCodeEditor value={value} onChange={this.onCodeChange}/>
                
                </div>
                    
            </div>
        );
    }

}


