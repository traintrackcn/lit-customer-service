import { LITFetch, LITFetchInfo } from './LITFetch';

export default ({state, company, platform}) => {

    if (!state || !company || !platform){
        throw { 'reason': 'invalid PUT'};
    }

    let body = {};
    body.settings = state;

    return new Promise( async (resolve, reject) => {
        const method = 'PUT';
        const info = LITFetchInfo({
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