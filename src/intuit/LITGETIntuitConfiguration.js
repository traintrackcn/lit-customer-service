import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';
import { configurationUrl } from './intuit';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        // let type = 'issues/25246.json';
        let url = configurationUrl();

        let info = LITFetchInfo({
            method: "GET",
            // type: type
            url: url,
        });

        
            
        try {   
            const response = await LITFetch({info});
            resolve(response);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}










// - (NSString *)requestType{
//     return @".well-known/openid_sandbox_configuration/";
// }

// - (id)serverUrl{
//     return @"https://developer.api.intuit.com";
// }


