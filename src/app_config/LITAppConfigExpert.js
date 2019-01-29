import React from 'react';
import LITPureComponent from '../LITPureComponent';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import LITCodeEditor from './LITCodeEditor';
import { fromJS } from 'immutable';
import LITProcessing from '../LITProccesing';
import Modal from 'react-responsive-modal';
import styles from '../index.module.css';

export default class LITAppConfigExpert extends LITPureComponent {

    constructor(props){
        super(props);

        this.state = {
            modal: false,            
        };

        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSave = this.onSave.bind(this);

        this.onCloseDetail = this.onCloseDetail.bind(this);
        this.onClickExpert = this.onClickExpert.bind(this);
    }

    onReceiveProps({category, value}){
        console.log('onReceiveProps category -> ', category);

        if (!category){
            throw({ code: 'ErrorInvalidCatetory'});
        }

        if (value){
            this.state.value = value.toJS();
        }else{
            this.state.value = {};
        }

        // console.log('onReceiveProps this.state -> ', this.state.value);
    }

    onClickExpert() {
        this.setState({
            modal: true
        });
    }

    onCloseDetail(){
        this.setState({
            modal: false
        });
    }

    onCodeChange({newValue, changed }){
        console.log("onCodeChange");
        this.setState({
            newValue: newValue, 
            changed: changed
        });
    }

    async onSave(){
        const newValue = this.state.newValue;
        console.log('newValue -> '+JSON.stringify(newValue, null, 2));

        let category = this.props.category;
        s.set(p.appConfig.value.concat([category]), fromJS(newValue));

        this.setState({
            value: newValue,
            newValue: undefined, 
            changed: undefined
        });


        s.dispatch(r.appConfig.put());

        
    }

    render() {
        
        let value = this.state.value;
        let category = this.props.category;
        let platform = s.get(p.appConfig.platform);
        // console.log('render() this.state ->'+JSON.stringify(this.state, null, 2));
        // console.log('render() value ->'+value);

        if (!value) return null;
        const changed = this.state.changed;
        return (
            <div style={{border: '0px solid'}}>
                
            <div style={{
                width: '100%', padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                <div className={'expert-btn'} onClick={this.onClickExpert}>EXPERT</div>
                </div>

                <Modal 
                open={this.state.modal}
                onClose={this.onCloseDetail}
                classNames={{
                    // overlay: styles.customOverlay,
                    modal: styles.customModal,
                }}
                >
                <div style={{
                        width: '100%',
                        padding: 5,
                        // backgroundColor: '#FEFBDF',
                        // display: 'inline-block',
                    }}>
                    
                    <span style={{fontWeight: 'bold', color: '#5C3C00'}}>
                    {category}@{platform}
                    </span>
                    
                    {
                        changed &&
                        <span style={{display: 'inline-block'}}>
                        <Button size='sm' color="primary" onClick={this.onSave}>Save</Button>
                        </span>
                    }
                    
                </div>
                <div style={{padding: 0, height: '80vh'}}>
                <LITCodeEditor value={value} onChange={this.onCodeChange}/>
                </div>

                </Modal>
                
            </div>
        );
    }

}