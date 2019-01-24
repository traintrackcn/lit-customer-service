import LITReducer from 'lit-react/src/LITReducer';
import { Map } from 'immutable';
import LITSignInReducer from '../sign_in/LITSignInReducer';
import LITProjectReducer from '../project/LITProjectReducer';

export default class LITRootReducer extends LITReducer{


    constructor(){
        super();

        this.signIn = new LITSignInReducer();
        this.prj = new LITProjectReducer();

        this.subReducers.signIn = this.signIn;
        this.subReducers.prj = this.prj;
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