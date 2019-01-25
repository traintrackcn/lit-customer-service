import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        let type= 'intuit/api/companyinfo';

        let info = LITFetchInfo({
            method: "GET",
            type: type
        });

        
            
        try {   
            const res = await LITFetch({info});
            // console.log('company info -> ', JSON.stringify(response, null, 2));
            resolve(res.CompanyInfo);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}