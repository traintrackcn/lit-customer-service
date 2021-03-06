import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        let type = 'issues/25246.json';

        let info = LITFetchInfo({
            method: "GET",
            type: type
        });

        
            
        try {   
            const response = await LITFetch({info});
            resolve(response);
        } catch (error) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject({ error: error });
        }

    });
}