import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        let type = 'tracker/projects.json?limit=100';

        let info = LITFetchInfo({
            method: "GET",
            type: type
        });

        
            
        try {   
            const res = await LITFetch({info});
            // console.log('res -> '+JSON.stringify(res, null, 2));
            resolve(res);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}