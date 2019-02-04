// import React from 'react';
import { LITFetch, LITFetchInfo } from '../network/LITFetch';

export default ({prj, month}) => {
    return new Promise( async (resolve, reject) => {

        const startDate = month.startDate;
        const endDate = month.endDate;

        console.log('prj -> '+JSON.stringify(prj, null, 2));
    
        // const type = 'tracker/time_entries.json?project_id='+prj.get('id')+'&spent_on=><YYYY-MM-DD|YYYY-MM-DD';
        const type = 'tracker/time_entries.json?limit=100&project_id='+prj.get('id')+'&spent_on=><'+startDate+'|'+endDate;

        let info = LITFetchInfo({
            method: "GET",
            type: type
        });

        
            
        try {   
            const response = await LITFetch({info});
            resolve(response['time_entries']);
        } catch (e) {
            // console.log('error -> '+JSON.stringify(error, null, 2));
            reject(e);
        }

    });
}