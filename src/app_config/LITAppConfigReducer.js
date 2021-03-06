import { Map, fromJS } from 'immutable'; 
import LITReducer from 'lit-react/src/LITReducer';
import p from '../rPath';
import LITGETConfig from './LITGETConfig';
import LITPUTConfig from './LITPUTConfig';
import { prj_getConfig } from '../project/prj-utils';

export default class LITAppConfigReducer extends LITReducer{

    constructor(){
        super();

        this.platform = undefined;
        this.company = undefined;

    }

    get({prj, platform}) {
        
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{

                // console.log("r -> "+r);
                // console.log("s -> "+s);

                let company = prj_getConfig(prj, 'code');

                //if cached, won't GET 
                if (company 
                    && platform 
                    && company === this.company 
                    && platform === this.platform){
                    return;
                }

                //remember requested parameters
                this.company = company;
                this.platform = platform;

                
                dispatch(this.SET(['loading'], true));
                // let company = s.get(p.appConfig.company);
                // let platform = s.get(p.appConfig.platform);
                const state = await LITGETConfig({
                    company: this.company, 
                    platform: this.platform
                });
                
                // console.log('state -> ', JSON.stringify(state, null, 2));

                dispatch(this.SET(['value'], fromJS(state)));
                dispatch(this.DELETE(['loading']));

            }catch(e){
                console.log('e -> '+JSON.stringify(e, null, 2));

                // dispatch ( r.processing.DISMISS() );
                return e;
            }
            
            
        }

    }

    put(){
        return async (dispatch) => {

            const r = this.r;
            const s = this.s;

            try{
                let prj = s.get(p.prj.value);
                let platform = s.get(p.appConfig.platform);
                let company = prj_getConfig(prj, 'code');
                let value = s.get(p.appConfig.value).toJS();

                await LITPUTConfig({company, platform, value});
                
                // this.SET('value', fromJS(state));
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