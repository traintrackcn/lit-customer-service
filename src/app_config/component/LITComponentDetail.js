import React, { PureComponent } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col } from 'reactstrap';
import LITCodeEditor from '../LITCodeEditor';
import s from './component.module.css';
import mainS from '../../css/main.module.css';
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
        

        return (
            <Modal isOpen={isOpen} backdrop  external={externalCloseBtn} fade={true} onClosed={this.onClosed}>
                
                    <Container fluid 
                        style={{
                            backgroundColor:'red',
                            width: '100%',
                            padding: '0px',
                            borderRadius: '3px 3px 0px 0px',
                            overflow: 'hidden',
                            }}>
                        <Row noGutters className={[stateStyle].join(' ')}>
                            <Col
                                style={{
                                    padding:10,
                                    paddingLeft: 15,
                                }} 
                                xs="12">
                                <div  className={[s.detailTitle].join(' ')}>{title}</div> 
                                <div  className={[s.detailDescription].join(' ')}></div>{description}
                            </Col>
                        </Row>
                    </Container>  
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



