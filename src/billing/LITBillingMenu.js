import React, { PureComponent } from 'react';
import menuS from '../css/menu.module.css';
import { connect } from 'react-redux';
import s from '../store';
import p from '../rPath';
import { getPlans } from '../project/prj-utils';
import LITBillingMenuItemView from './LITBillingMenuItemView';

class LITBillingMenu extends PureComponent {

    componentWillMount(){
        console.log('LITBillingMenu componentWillMount()', this.props.prj);
    }

    // componentDidMount(){
    //     console.log('LITBillingMenu componentDidMount()', this.props.prj);
    // }

    componentWillReceiveProps(nextProps){
        // super.componentDidCatch();
        console.log('LITBillingMenu componentWillReceiveProps()', nextProps);

        let prj = nextProps.prj;
        if (!prj) return;
        let plans = getPlans(prj);
        if (plans.length && !s.get(p.submenu.value)){
            s.set(p.submenu.value, plans[0]); //will trigger 1 more rendering
            console.log('LITBillingMenu changed state while rendering');
        }
    }

    componentWillUnmount(){
        console.log('LITBillingMenu componentWillUnmount()', this.props.prj);
    }

    render() {

        console.log('LITBillingMenu render()', this.props.prj);

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
        let prj = this.props.prj;
        let plans = getPlans(prj);
        let arr = [];
        let submenu = s.get(p.submenu.value);

        console.log('plans -> '+plans);
        plans.forEach(plan => {
            arr.push(
            <LITBillingMenuItemView 
                key={plan}
                active={(submenu===plan)}
                title={plan}
                value={plan}
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
  
export default connect(mapStateToProps)(LITBillingMenu)