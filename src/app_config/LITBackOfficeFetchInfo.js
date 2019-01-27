
import { lit } from './LITAppConfigDefine';
import { endPoint } from '../network/LITNetworkDefine';

export default ({ headers = {}, method = 'GET', type = 'INVALID', body = {}, company }) => {

    const config = lit.dev;
    const url = endPoint + 'backoffice/' + type;
    // const state = store.getState();
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-client-id': config.client.id,
        'X-client-secret': config.client.secret,
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
