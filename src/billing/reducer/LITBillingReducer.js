import { Map } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import LITCustomerReducer from './LITCustomerReducer';
import LITItemReducer from './LITItemReducer';
import LITInvoiceReducer from './LITInvoiceReducer';

export default class LITBillingReducer extends LITReducer{

    constructor(){
        super();

        this.customer = new LITCustomerReducer();
        this.item = new LITItemReducer();
        this.invoice = new LITInvoiceReducer();
        // this.nav = new LITNavReducer();

        this.subReducers.customer = this.customer;
        this.subReducers.item = this.item;
        this.subReducers.invoice = this.invoice;

    }
    
    main(state=Map(), action){

        state = super.main(state, action);

        if (!this.myAction(action)) return state;
        switch (action.type) {
        //   case 'SET_DEMO_USER':{
        //     // state = state.setIn(['user'], '100009201'); //n8
        //     state = state.setIn(['user'], '80000101'); //vbn
        //     state = state.setIn(['pwd'], 'Ab1234');
        //     return state;
        //   }
        }

        return state;
    }
    
}; 