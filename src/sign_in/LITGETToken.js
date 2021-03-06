
import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default ({ user, pwd }) => {
    return new Promise( async (resolve, reject) => {
    
        let type = 'auth/tracker';

        let info = LITFetchInfo({
            method: 'POST',
            type: type,
            body: {
                user: user,
                pwd: pwd
            }
        });

        
        try {   
            const res = await LITFetch({info});
            resolve(res);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}