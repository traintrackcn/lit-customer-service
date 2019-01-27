import React, { PureComponent } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col } from 'reactstrap';
import LITCodeEditor from '../LITCodeEditor';
import componentS from './component.module.css';
import mainS from '../../css/main.module.css';
import '../../index.css';
import { isActive } from '../LITAppConfigDefine';
export default class LITComponentDetail extends PureComponent{


    constructor() {
        super();
        this.onClosed = this.onClosed.bind(this);
        // this.onEnter = this.onEnter.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.state = {};
    }

    resetState(){
        this.state.newRules = undefined;
        this.state.changed = undefined;
    }

    onClosed(){
        console.log('onClosed() '+JSON.stringify(this.state, null, 2));
        this.resetState();
    }

    onCodeChange({newValue, changed }){
        console.log("onCodeChange");
        this.setState({
            newRules: newValue, 
            changed: changed
        });
    }

    async onSave(){
        const key = this.props.theKey;
        const value = this.props.value;
        const newRules = this.state.newRules;

        console.log(key+' '+JSON.stringify(value, null, 2));
        console.log(key+' newRules -> '+JSON.stringify(newRules, null, 2));

        value.rules = newRules;

        const state = this.props.state;
        if (this.props.onSave){

            this.props.onSave(state);

            this.setState({
                newRules: undefined, 
                changed: undefined
            });

        }




        
    }

    render() {

        // console.log('state -> '+JSON.stringify(this.state, null, 2));

        const isOpen = this.props.isOpen;
        const key = this.props.theKey;
        const value = this.props.value;
        const title = key;
        

        const active = isActive(key, value);
        
        const description = value?value.description:'';
        const rules = value?value.rules:undefined;

        let stateStyle = active?mainS.active:mainS.inactive;
        const externalCloseBtn = <button className="close" style={{ position: 'absolute', width: '100%', height: '100%'}} onClick={this.props.onClose}></button>;
        
        console.log('componentS.modal ->', JSON.stringify(componentS.modal, null, 2));

        return (
            <Modal
                size='xl'
                isOpen={isOpen} 
                backdrop  
                external={externalCloseBtn} 
                fade={true} 
                onClosed={this.onClosed}
                className={'modal-default'}
                // modalClassName={'modal-default'}
                // centered
                >
                
                    <div className={["component-detail-container", stateStyle].join(' ')}>
                
                        <div  className={['component-detail-title'].join(' ')}>{title}</div> 
                        <div  className={['component-detail-description'].join(' ')}></div>
                        {description}
                    </div>
                    <div style={{height: 500, width: '100%'}}>
                    <LITCodeEditor value={rules} onChange={this.onCodeChange}/>
                    </div>
                    
                    
                        <ModalFooter >
                        {
                            this.state.changed  &&

                            <Button color="primary" onClick={this.onSave}>Save</Button>
                        
                        }
                            <Button color="secondary" onClick={this.props.onClose}>Close</Button>
                        </ModalFooter>
                    
                
                </Modal>
        );
    }

}



