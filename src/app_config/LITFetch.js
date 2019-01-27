
import { lit } from './LITAppConfigDefine';
// import { store } from '../store';

export const LITFetchInfo = ({ headers = {}, method = 'GET', type = 'INVALID', body = {}, company }) => {

    const config = lit.dev;
    const url = config.endpoint + type;
    // const state = store.getState();
    let token;
    // if (state) token = state.getIn(['r', 'token', 'value']);
    if (!token) token = 'INVALID_TOKEN';
    
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-client-id': config.client.id,
        'X-client-secret': config.client.secret,
        'X-Authentication-Token': token,
        'x-company-code': company.toUpperCase(),
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


            // const demoParams = {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'x-client-id': 'MNENQyECCH8AismbCHp9io',
            //       'X-client-secret': '44fjgte3APAZjHrWC6bPCB35teftl0R9YXUjEt4kA',
            //       'x-company-code': 'NEN'
            //     },
            //     body: JSON.stringify({
            //       name: 'Hubot',
            //       login: 'hubot',
            //     })
            // };

            // console.log('info.params.body -> '+info.params.body);
            const response = await fetch(info.url, info.params);
            // const response = await fetch(info.url, demoParams);
            console.log('response.status -> '+response.status);
            // console.log('raw response -> '+JSON.stringify(response, null, 2));
        
            if (!response.ok){
                // console.log ('fetch failed -> '+JSON.stringify(response));
                reject( response.status );
            }else{
                // console.log('response ok.');
                const json = await response.json();
                // console.log('raw response -> '+JSON.stringify(json, null, 2));
                if (json.meta && json.meta.error){
                    reject (json.meta.error);
                }else{
                    if (json.response) resolve (json.response);
                    resolve(json);
                }
            }
        }catch(e){
            reject( 'Cannot '+'['+info.params.method+'] '+info.url);
        }
    });
}