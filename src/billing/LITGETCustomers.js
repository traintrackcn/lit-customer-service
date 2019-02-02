import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default ({prj}) => {
    return new Promise( async (resolve, reject) => {
    
        let type= 'intuit/api/customers';
        let headers = {
            'x-redmine-prj-id': prj.get('id')
        };

        let info = LITFetchInfo({
            method: "GET",
            type: type, 
            headers: headers
        });

        
            
        try {   
            const res = await LITFetch({info});
            console.log('res -> ', JSON.stringify(res, null, 2));
            resolve(res);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}