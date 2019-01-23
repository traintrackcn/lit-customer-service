import { host, endPoint, protocol } from './LITNetworkDefine';
import { getToken } from '../session';

export const LITFetchInfo = ({ user, pwd, headers = {}, method = 'GET', type = 'INVALID', body = {} }) => {

    let url = endPoint + type;
    let apiKey = getToken();

    let defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'origin': 'x-requested-with',
        "X-Redmine-API-Key": apiKey,
    };

    if (headers) {
        Object.assign(headers, defaultHeaders);
    }else{
        headers = defaultHeaders;
    }

    const result =  {
        url: url,
        params: {
            method: method,
            headers: headers,
            // body: method==='GET'?null:JSON.stringify(body),
            body: body,
        }
    };

    return result;
    
};


export const LITFetch = ( { info } ) => {
    return new Promise( async (resolve, reject) => {
        try{
            console.log ('LITFetch -> '+JSON.stringify(info, null, 2));
            const body = info.params.body;
            const method = info.params.method;
            info.params.body = (method==='GET')?null:JSON.stringify(body);

            // console.log('info.params.body -> '+info.params.body);
            const response = await fetch(info.url, info.params);
            // const response = await fetch(info.url, demoParams);
            console.log('response.status -> '+response.status);
            console.log('response.ok -> '+response.ok);
            console.log('response.type -> '+response.type);
            console.log('raw response -> '+JSON.stringify(response, null, 2));
        
            if (!response.ok){
                // console.log ('fetch failed -> '+JSON.stringify(response));
                reject( response.status );
            }else{
                // console.log('response ok.');

                try {
                    const json = await response.json();
                // console.log('raw response -> '+JSON.stringify(json, null, 2));
                    if (json.meta && json.meta.error){
                        reject (json.meta.error);
                    }else{
                        if (json.response) resolve (json.response);
                        resolve(json);
                    }
                } catch (e) {
                    resolve({});
                }

                // try {
                //     const text = await response.text();
                //     console.log("text -> "+text);
                //     resolve(text);
                // } catch (e) {
                //     console.log("Invalid TEXT");
                // }

                
            }
        }catch(e){
            reject( 'Cannot '+'['+info.params.method+'] '+info.url);
        }
    });
}