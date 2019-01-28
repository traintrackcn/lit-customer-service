import React, { PureComponent } from 'react';
// import menuS from '../css/menu.module.css';
import '../index.css';
import { connect } from 'react-redux';
import s from '../store';
import p from '../rPath';
import { getPlans } from '../project/prj-utils';
import LITBillingMenuItemView from '../billing/LITBillingMenuItemView';
import { categories, platforms } from './LITAppConfigDefine';
import menuS from '../css/menu.module.css';
import LITPlatformDropdown from './LITPlatformDropdown';

class LITAppConfigNavigator extends PureComponent {

    constructor(){
        super();
        this.onClickMenuItem = this.onClickMenuItem.bind(this);
    }

    onClickMenuItem(value){
        s.set(p.appConfig.category, value);
    }

    componentWillMount(){
        console.log('LITAppConfigMenu componentWillMount()');
        this.setDefault();
    }

    // componentDidMount(){
    //     console.log('LITBillingMenu componentDidMount()');
    // }

    componentWillReceiveProps(nextProps){
        // super.componentDidCatch();
        console.log('LITAppConfigMenu componentWillReceiveProps()', nextProps);
        this.setDefault();
    }

    componentWillUnmount(){
        console.log('LITAppConfigMenu componentWillUnmount()');
    }


    setDefault(){
        let values = categories;
        let pCategory = p.appConfig.category;
        if (values && !s.get(pCategory)){
            s.set(pCategory, values[0]); //will trigger 1 more rendering
            console.log('LITAppConfigMenu changed state while rendering');
        }

        let pPlatform = p.appConfig.platform;
        if (platforms && !s.get(pPlatform)){
            s.set(pPlatform, platforms[0]); //will trigger 1 more rendering
            console.log('LITAppConfigMenu changed state while rendering');
        }
    }

    render() {

        console.log('LITAppConfigMenu render()');

        return (
            <div className={['sub-menu-container'].join(' ')}>
            <LITPlatformDropdown/>
            {
                this.items()
            }

        </div>
        )
    }

    items() {
        // let prj = this.props.prj;
        var arr = [];
        let category = this.props.category;
        let values = categories;
        values.forEach(value => {
            arr.push(
            <ItemView 
                key={value}
                active={(category===value)}
                title={value}
                value={value}
                onClick={this.onClickMenuItem}
            />
            );
        });


        return arr;
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        category: s.get(p.appConfig.category)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigNavigator)




class ItemView extends PureComponent {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        let value = this.props.value;
        
        if (this.props.onClick){
            this.props.onClick(value);
        }
    }

    render() {

        let active = this.props.active;
        let title = this.props.title;
        var style = [menuS.sub, menuS.normal].join(' ');

        if (active){
            style = [menuS.sub, menuS.selected].join(' ');
        }
        // title = title.replace(/Development -/i, 'Dev -');

        return (
            <span className={style} onClick={this.onClick}>
                {title}
            </span> 
                
        );
    }
}