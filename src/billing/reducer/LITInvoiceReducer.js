import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import LITGETInvoices from '../LITGETInvoices';
import p from '../../rPath';

export default class LITInvoiceReducer extends LITReducer{

    constructor(){
        super();

    }

    get({prj}) {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{
                if (s.get(p.billing.invoice.collection)) return;


                var res = await LITGETInvoices({
                    prj: prj
                });

                if (!res) res = {};
                
                s.set(p.billing.invoice.collection, fromJS(res));

                console.log('s.get(p.billing.invoice.collection) ->', s.get(p.billing.invoice.collection));

            }catch(e){
                console.log('e -> '+JSON.stringify(e, null, 2));

                // dispatch ( r.processing.DISMISS() );
                return e;
            }
            
            
        }

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