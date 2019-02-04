import React from 'react';
import LITPureComponent from '../LITPureComponent';
import { connect } from 'react-redux';
import s, {r} from '../store';
import p from '../rPath';
import {Button} from 'reactstrap';
import LITGetSpentTime from './LITGetSpentTime';

export default class LITNewInvoiceField extends LITPureComponent {

    constructor(){
        super();
        this.state = {};
    }

    async onReceiveProps({prj, month}){
        console.log('onReceiveProps()');


        if (!prj || !month) return;
        if (this.month === month) return;
        if (this.prj === prj) return;

        this.month = month;
        this.prj = prj;

        var customers = await s.dispatch(r.billing.customer.get({prj}));
        var items = await s.dispatch(r.billing.item.get({prj}));

        var timeEntries = await LITGetSpentTime({prj, month});

        console.log('timeEntries ->', JSON.stringify(timeEntries, null, 2));

        this.setState({
            customers: customers, 
            items: items
        });
    }

    render() {
        console.log('render()');
        return (
            <div>
                <div>{this.month.date}</div>
                <div>{this.month.startDate}</div>
                <div>{this.month.endDate}</div>
                <div>
                    {this.customerOptions()}
                </div>

                <div>Support ,</div>

                <div>Enhancement</div>


                <div>
                    <Button color="primary" >ISSUE INVOICE</Button>
                </div>
            </div>
        );
    }

    customerOptions() {
        var arr = [];
        var customers = this.state.customers
        if (!customers) return arr;
        
        customers.forEach(item => {
            // console.log('item ->', JSON.stringify(item));
            arr.push(
                <span key={item.Id}>{item.DisplayName}</span>
            );
        });

        return arr;
    }

}

