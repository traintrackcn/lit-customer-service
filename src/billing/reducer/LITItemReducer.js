import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import LITGETItems from '../LITGETItems';
import p from '../../rPath';

export default class LITItemReducer extends LITReducer{

    constructor(){
        super();

    }

    get({prj}) {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{

                if (s.get(p.billing.item.collection)) return;
                
                dispatch(this.SET(['loading'], true));
                // let company = s.get(p.appConfig.company);
                // let platform = s.get(p.appConfig.platform);
                const result = await LITGETItems({
                    prj: prj
                });
                
                // s.set(p.billing.item.collection, fromJS(state));
                return result;

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