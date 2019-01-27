import LITBackOfficeFetchInfo from './LITBackOfficeFetchInfo';
import { LITFetch } from '../network/LITFetch';

export default ({state, company, platform}) => {

    if (!state || !company || !platform){
        throw { 'reason': 'invalid PUT'};
    }

    let body = {};
    body.settings = state;

    return new Promise( async (resolve, reject) => {
        const method = 'PUT';
        const info = LITBackOfficeFetchInfo({
            method: method,
            company: company,
            type: 'apps/'+platform+'/settings',
            body: body
        });
            
        try {   
            const response = await LITFetch({info});
            resolve(response);
        } catch (e) {
            reject(e);
        }

    });
}