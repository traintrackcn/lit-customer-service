import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import p from '../rPath';
import LITGETConfig from './LITGETConfig';
import LITPUTConfig from './LITPUTConfig';

export default class LITAppConfigReducer extends LITReducer{

    constructor(){
        super();

        this.platform = undefined;
        this.code = undefined;
    }

    put(){
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{

                console.log("r -> "+r);
                console.log("s -> "+s);

                let value = s.get(p.appConfig.value).toJS();
                console.log('value ->', JSON.stringify(value, null, 2));

                let platform = s.get(p.appConfig.platform);
                let company = s.get(p.appConfig.company);
                await LITPUTConfig({company, platform, value});
                
                // this.SET('value', fromJS(state));
            }catch(e){
                console.log('e -> '+JSON.stringify(e, null, 2));

                // dispatch ( r.processing.DISMISS() );
                return e;
            }
            
            
        }
    }

    get() {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{

                console.log("r -> "+r);
                console.log("s -> "+s);

                
                dispatch(this.SET(['loading'], true));
                let company = s.get(p.appConfig.company);
                let platform = s.get(p.appConfig.platform);
                const state = await LITGETConfig({company, platform});
                
                console.log('state -> ', JSON.stringify(state, null, 2));

                dispatch(this.SET(['value'], fromJS(state)));
                dispatch(this.SET(['loading'], true));
                dispatch(this.DELETE(['loading']));

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