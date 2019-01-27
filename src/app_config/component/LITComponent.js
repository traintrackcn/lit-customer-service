import React, { Component } from 'react';
import { Col } from 'reactstrap';
import mainS from '../../css/main.module.css';
import s from './component.module.css';
import Switch from 'react-ios-switch';
import { isActive, isInternal } from '../LITAppConfigDefine';

export default class LITComponent extends Component {


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
                    
                    <div className={[s.boxContainer, stateStyle, mainS.disableTextSelection].join(' ')} onClick={this.onClick}>
                        <div className={[s.boxTitle].join(' ')}>
                            {title}
                        </div>
                        <p className={s.boxDescription}>
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