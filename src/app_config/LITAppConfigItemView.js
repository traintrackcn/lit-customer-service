import React, { PureComponent, Component } from 'react';
import s, {r} from '../store';
import p from '../rPath';
import { connect } from 'react-redux';
import { Row, Container, Spinner, Col } from 'reactstrap';
import LITAppConfigDetail from './LITAppConfigDetail';
import Switch from 'react-ios-switch';
import mainS from '../css/main.module.css';
import '../index.css';
import { isInternal } from './LITAppConfigDefine';

class LITAppConfigItemView extends PureComponent {


    constructor(props) {
        super(props);
        // console.log('props -> '+JSON.stringify(props, null, 2));
        this.onClick = this.onClick.bind(this);
        this.onSwitch = this.onSwitch.bind(this);
    }



   
    onClick(){
        const value = this.props.value;
        const key = this.props.theKey;
        if (this.props.onClick) this.props.onClick(key, value);
    }

  

    async onSwitch(){

        console.log('onSwitch()');
        const key = this.props.theKey;
        let category = this.props.category;
        // const state = this.props.state;
        console.log('key ->', key);

        // if (this.props.onSwitch){
        //     this.props.onSwitch(key);
        // }        
        // let active = !this.props.active;
        // let value = this.props.value;
        // value.setIn(['active'], !this.props.active);
        s.set(p.appConfig.value.concat([category, key, 'active']), !this.props.active);

        await s.dispatch(r.appConfig.put());
    }


    render() {

        // const value = this.props.value;
        const key = this.props.theKey;
        console.log('key -> ', key);
        let title = key;
        const description = this.props.description;
        let active = this.props.active;
        let internal = isInternal(key);
        if (internal) active = true;
        let stateStyle = active?mainS.active:mainS.inactive;

        // if (internal) active = true;

        
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


const mapStateToProps = (state, ownProps) => {
    let appConfigValue = s.get(p.appConfig.value);
    let key = ownProps.theKey;
    let category = ownProps.category;
    let value = appConfigValue?appConfigValue.getIn([category, key]):undefined;

    // console.log('value -> ', JSON.stringify(value));
    // console.log('loading -> ', loading);
    let active = value?value.get('active'): false;
    let description = value?value.get('description'):undefined;
 
    return {
        // value: value,
        active: active,
        description: description,
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigItemView)