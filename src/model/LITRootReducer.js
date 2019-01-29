import LITReducer from 'lit-react/src/LITReducer';
import { Map } from 'immutable';
import LITSignInReducer from '../sign_in/LITSignInReducer';
import LITProjectReducer from '../project/LITProjectReducer';
import LITIntuitReducer from '../intuit/LITIntuitReducer';
import LITAppConfigReducer from '../app_config/LITAppConfigReducer';
// import LITNavReducer from '../LITNavReducer';

export default class LITRootReducer extends LITReducer{


    constructor(){
        super();

        this.signIn = new LITSignInReducer();
        this.prj = new LITProjectReducer();
        this.intuit = new LITIntuitReducer();
        this.appConfig = new LITAppConfigReducer();
        // this.nav = new LITNavReducer();

        this.subReducers.signIn = this.signIn;
        this.subReducers.prj = this.prj;
        this.subReducers.intuit = this.intuit;
        this.subReducers.appConfig = this.appConfig;
        // this.subReducers.nav = this.nav;
    }

    main(state = Map(), action) {
        state = super.main(state, action);

        if ( !this.myAction(action) ) return state;

        // switch (action.type) {
    
        //     case 'SET_FLAG':{
        //         state = state.setIn(['flag', action.flag], true);    
        //         return state;
        //     }

        //     case 'REMOVE_FLAG':{
        //         state = state.deleteIn(['flag', action.flag]);    
        //         return state;
        //     }
            
        // }
    
        return state;
      
    };

}