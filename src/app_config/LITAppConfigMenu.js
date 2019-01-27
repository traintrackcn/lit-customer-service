import React, { PureComponent } from 'react';
import menuS from '../css/menu.module.css';
import { connect } from 'react-redux';
import s from '../store';
import p from '../rPath';
import { getPlans } from '../project/prj-utils';
import LITBillingMenuItemView from '../billing/LITBillingMenuItemView';
import { categories } from './LITAppConfigDefine';

class LITAppConfigMenu extends PureComponent {

    componentWillMount(){
        console.log('LITAppConfigMenu componentWillMount()', this.props.prj);
    }

    // componentDidMount(){
    //     console.log('LITBillingMenu componentDidMount()', this.props.prj);
    // }

    componentWillReceiveProps(nextProps){
        // super.componentDidCatch();
        console.log('LITAppConfigMenu componentWillReceiveProps()', nextProps);
        let values = categories;
        if (values && !s.get(p.submenu.value)){
            s.set(p.submenu.value, values[0]); //will trigger 1 more rendering
            console.log('LITAppConfigMenu changed state while rendering');
        }
    }

    componentWillUnmount(){
        console.log('LITAppConfigMenu componentWillUnmount()', this.props.prj);
    }

    render() {

        console.log('LITAppConfigMenu render()', this.props.prj);

        let prj = this.props.prj;

        if (!prj) return null;

        return (
            <div className={[menuS.subContainer].join(' ')}>

            {
                this.items()
            }

        </div>
        )
    }

    items() {
        // let prj = this.props.prj;
        var arr = [];
        let submenu = this.props.submenu;
        let values = categories;
        values.forEach(value => {
            arr.push(
            <LITBillingMenuItemView 
                key={value}
                active={(submenu===value)}
                title={value}
                value={value}
            />
            );
        });


        return arr;
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        prj: s.get(p.prj.value),
        submenu: s.get(p.submenu.value),
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITAppConfigMenu)