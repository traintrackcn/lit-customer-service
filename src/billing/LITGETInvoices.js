import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';
import local, { KEY_TMP_INTUIT_INVOICE_DATA } from '../local';

export default ({prj}) => {
    return new Promise( async (resolve, reject) => {
    
        let type= 'intuit/api/invoices';
        let headers = {
            'x-redmine-prj-id': prj.get('id')
        };

        let info = LITFetchInfo({
            method: "GET",
            type: type, 
            headers: headers
        });

        
            
        try {   
            const cache = local.get(KEY_TMP_INTUIT_INVOICE_DATA);
            var res = JSON.parse(cache);
            if (!res){
                res = await LITFetch({info});
                // console.log('res -> ', JSON.stringify(res, null, 2));
                local.set(KEY_TMP_INTUIT_INVOICE_DATA, JSON.stringify(res));
            }
            resolve(res.QueryResponse.Invoice);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}