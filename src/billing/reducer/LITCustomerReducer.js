import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import LITGETCustomers from '../LITGETCustomers';
import p from '../../rPath';

export default class LITCustomerReducer extends LITReducer{

    constructor(){
        super();

    }

    get({prj}) {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{


                if (s.get(p.billing.customer.collection)) return;

                
                const state = await LITGETCustomers({
                    prj: prj
                });
                
                // s.set(p.billing.customer.collection, fromJS(state));
                return state;

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