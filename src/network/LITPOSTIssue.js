import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default () => {
    return new Promise( async (resolve, reject) => {
    
        let type = 'issues/25246.json';

        let info = LITFetchInfo({
            method: 'PUT',
            // method: "GET",
            type: type,
            body: {
                issue:{
                    notes: "notes from eGEM support"
                    // project_id: "demo-project",
                    // subject: "a issue from eGEM support app",
                    // description: "demo description"
                }
            }
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