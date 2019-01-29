import React from 'react';
import LITPureComponent from '../LITPureComponent';
import s, {r} from '../store';
import p from '../rPath';
import Switch from 'react-ios-switch';
import mainS from '../css/main.module.css';
import '../index.css';
import { isInternal } from './LITAppConfigDefine';

export default class LITAppConfigItemView extends LITPureComponent {


    constructor(props) {
        super(props);
        // console.log('props -> '+JSON.stringify(props, null, 2));
        this.onClick = this.onClick.bind(this);
        this.onSwitch = this.onSwitch.bind(this);
    }

    onReceiveProps(props){
        let value = props.value;
        this.active = value?value.get('active'): false;
        this.description = value.get('description');
    }

   
    onClick(){
        const value = this.props.value;
        const key = this.props.theKey;
        if (this.props.onClick) this.props.onClick(key, value);
    }

    async onSwitch(){
        let category = this.props.category;
        if (!category){
            throw({ code: 'ErrorInvalidCategory'});
        }

        let current = this.active;

        console.log('onSwitch() to ->', !current);
        const key = this.props.theKey;

        // console.log('before state ->', JSON.stringify(s.get(p.appConfig.value), null, 2));
        
        s.set(p.appConfig.value.concat([category, key, 'active']), !current);
        
        s.dispatch(r.appConfig.put());
        // console.log('state ->', JSON.stringify(s.get(p.appConfig.value), null, 2));
    }


    render() {

        console.log('render()');

        // const value = this.props.value;
        const key = this.props.theKey;
        console.log('key -> ', key);
        let title = key;
        let active = this.active;
        let description = this.description;
        let internal = isInternal(key);
        if (internal) active = true;
        let stateStyle = active?mainS.active:mainS.inactive;

        // if (internal) active = true;

        
        return (
            
            <div className={['app-pref-container', stateStyle, mainS.disableTextSelection].join(' ')}>
                

                <div 
                    xs='9' 
                    // xs='auto'
                    onClick={this.onClick} className={['app-pref-content'].join(' ')}>
                    <div  className={['app-pref-title'].join(' ')}>
                        {title}
                    </div>
                    
                    <div className={'app-pref-description'}>
                        {description}
                    </div>
                </div>
                


                <div className={'app-pref-control'}>
                {
                    !internal &&    
                    <Switch
                        style={{
                            // border: 'solid 1px',
                            // marginRight: 6,
                        }}
                        checked={active}
                        onChange={this.onSwitch}
                    />
                }


                {
                    internal &&    
                    <div style={{
                        // marginRight: 6, 
                        fontWeight: 'bold',
                        fontSize: 13,
                        color: '#999', }}>Internal</div>
                }
                </div>


            </div>

        );
    }
}