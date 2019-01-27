import { getPlans, getCode, getConfig } from '../prj-utils';
import { fromJS } from 'immutable';

describe('', () => {

    it('', ()=>{
        let description = `

        **config-begin**
        platform-->ios
        customer-->Customer A|Customer B
        **config-end**

        [config]
        code-->MON
        customer-->Customer A|Customer B
        [config]
        
        [plan]
        Elite 2018.9~2018.12
        Basic 2017.8~2017.8
        Basic 2015.11~2017.1
        [plan]
        
        
        `;

        var prj = {
            "description": description
        };

        // const regex = /\[plan\-begin\]\w+\[plan\-end\]/g;
        // const match = getPlans()
        const plan = getPlans(fromJS(prj), 'plan');
        expect(plan).toMatchSnapshot();

        const code = getConfig(fromJS(prj), 'code');
        expect(code).toMatchSnapshot();

        const customer = getConfig(fromJS(prj), 'customer');
        expect(customer).toMatchSnapshot();

    });
    

});