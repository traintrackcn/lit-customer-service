import p from '../rPath';
import { fromJS } from 'immutable';

describe('', () => {

    it.each([
        ['p.intuit.config', p.intuit.config],
        // ['p.signUp.order.shippingMethod.id', p.signUp.order.shippingMethod.id],
    ])
    ('%s should be %s', (key, value)=>{
        expect(value).toMatchSnapshot();
    });

});