import { fromJS } from 'immutable';
import p from '../rPath';


describe('', () => {

    it('', ()=>{

        // expect(p.appConfig.company).toMatchSnapshot();
        expect(p.appConfig.platform).toMatchSnapshot();
        expect(p.appConfig.category).toMatchSnapshot();
        expect(p.appConfig.value).toMatchSnapshot();
        expect(p.billing.plan).toMatchSnapshot();
        expect(p.billing.invoice.collection).toMatchSnapshot();
        expect(p.billing.item.collection).toMatchSnapshot();
        expect(p.billing.customer.collection).toMatchSnapshot();

    });
    

});