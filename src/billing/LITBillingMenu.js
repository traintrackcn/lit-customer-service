import React from 'react';
import LITPureComponent from '../LITPureComponent';
import { connect } from 'react-redux';
import s from '../store';
import p from '../rPath';
import { prj_getPlans } from '../project/prj-utils';
import LITPlanDropdown from './LITPeriodDropdown';
import '../index.css';
import { BILLING_STATUSES, BILLING_PERIODS } from './LITBillingDefine'
import menuS from '../css/menu.module.css';

class LITBillingMenu extends LITPureComponent {


    onReceiveProps({prj, period}){
        if (!prj) return;
        // let plans = prj_getPlans(prj);
        if (!period){
            s.set(p.billing.period, BILLING_PERIODS[0]); //will trigger 1 more rendering
            console.log('LITBillingMenu changed state while rendering');
        }
    }

    render() {

        console.log('render()', this.props.prj);

        let prj = this.props.prj;

        if (!prj) return null;

        return (
            <div  className={['sub-menu-container'].join(' ')}>
                <LITPlanDropdown prj={prj} value={this.props.period} />

                {
                    this.items()
                }
            </div>
        )
    }

    onClickMenuItem(value){
        s.set(p.billing.status, value);
    }


    items() {
        // let prj = this.props.prj;
        var arr = [];
        BILLING_STATUSES.forEach(value => {
            arr.push(
            <ItemView 
                key={value}
                active={value===this.props.status}
                title={value}
                value={value}
                onClick={this.onClickMenuItem}
            />
            );
        });


        return arr;
    }


}


const mapStateToProps = (state, ownProps) => {
    return {
        prj: s.get(p.prj.value),
        period: s.get(p.billing.period),
        status: s.get(p.billing.status)
    }
}
  
//   const mapDispatchToProps = { increment, decrement, reset }
  
export default connect(mapStateToProps)(LITBillingMenu)


class ItemView extends LITPureComponent {

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