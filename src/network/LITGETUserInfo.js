// import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        let type = 'tracker/users/current.json';

        let info = LITFetchInfo({
            method: 'GET',
            type: type
        });
    
        try {   
            const response = await LITFetch({info});
            resolve(response.user);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}
