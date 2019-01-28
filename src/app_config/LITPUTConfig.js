import LITBackOfficeFetchInfo from './LITBackOfficeFetchInfo';
import { LITFetch } from '../network/LITFetch';

export default ({value, company, platform}) => {

    if (!value || !company || !platform){
        throw { 'reason': 'invalid PUT'};
    }

    let body = {};
    body.settings = value;

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