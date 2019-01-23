import LITReducer from '../reducers/LITReducer';
import { Map } from 'immutable';
// import LITProcessingReducer from '../components/LITProcessingReducer';
// import LITProfileReducer from '../fn_profile/LITProfileReducer';
// import LITTokenReducer from '../sign_in/LITTokenReducer';
import LITSignInReducer from '../sign_in/LITSignInReducer';
// import LITSignUpReducer from '../sign_up/LITSignUpReducer';
// import LITAddressValidator from '../address/LITAddressValidator';
// import LITAddressReducer from '../address/LITAddressReducer';
// import LITCountryReducer from '../address/LITCountryReducer';
// import LITTransactionTokenReducer from '../payment/LITTransactionTokenReducer';

export default class LITRootReducer extends LITReducer{


    constructor(){
        super();

        // let r = this;

        // this.processing = new LITProcessingReducer();
        // this.addressValidator = new LITAddressValidator();
        // this.address = new LITAddressReducer();
        // this.homeCountry = new LITCountryReducer('home', ['r', 'homeCountry', 'collection']);
        // this.shippingCountry = new LITCountryReducer('shipping', ['r', 'shippingCountry', 'collection']);
        // this.profile = new LITProfileReducer();
        // this.token = new LITTokenReducer();
        // this.transactionToken = new LITTransactionTokenReducer();
        this.signIn = new LITSignInReducer();
        // this.signUp = new LITSignUpReducer();

        // this.subReducers.processing = this.processing;
        // this.subReducers.address = this.address;
        // this.subReducers.homeCountry = this.homeCountry;
        // this.subReducers.shippingCountry = this.shippingCountry;
        // this.subReducers.profile = this.profile;
        // this.subReducers.token = this.token;
        // this.subReducers.transactionToken = this.transactionToken;
        this.subReducers.signIn = this.signIn;
        // this.subReducers.signUp = this.signUp;
        // this.subReducers.addressValidator = this.addressValidator;
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