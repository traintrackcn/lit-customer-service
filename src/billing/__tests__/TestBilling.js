import { fromJS } from 'immutable';
import { BILLING_MONTHS_FROM_PLANS } from '../LITBillingDefine';

describe('', () => {

    it('', ()=>{
        let plans = [
            "Elite 2018.9~2018.12",
            "Basic 2017.8~2017.8",
            "Basic 2015.11~2017.1"
          ];

        let months = BILLING_MONTHS_FROM_PLANS(plans);
    
        expect(months).toMatchSnapshot();

    });
    

});