import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';
import { qbEndPoint } from './intuit';
import intuit from './intuit';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        let realmId = intuit.realmId();
        // let url = qbEndPoint()+'company/'+realmId+'/query?query=%@&minorversion=4';
        let url = qbEndPoint()+'company/'+realmId+'/companyinfo/'+realmId+'?minorversion=4';
        let accessToken = await intuit.accessToken();

        let info = LITFetchInfo({
            method: "GET",
            url: url,
            headers: {
                "Authorization": 'Bearer '+accessToken
            }
        });

        
            
        try {   
            const response = await LITFetch({info});
            console.log('company info -> ', JSON.stringify(response, null, 2));
            resolve(response);
        } catch (error) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject({ error: error });
        }

    });
}