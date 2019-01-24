// import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default (prj) => {
    return new Promise( async (resolve, reject) => {

        console.log('prj -> '+JSON.stringify(prj, null, 2));
    
        let type = 'tracker/issues.json?limit=10&project_id='+prj.get('id');

        let info = LITFetchInfo({
            method: "GET",
            type: type
        });

        
            
        try {   
            const response = await LITFetch({info});
            resolve(response.issues);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}