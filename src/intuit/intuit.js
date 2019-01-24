import local, { KEY_INTUIT_TOKEN_DATA, KEY_INTUIT_CALLBACK_URI }  from '../local';



let production = false;
let _auth;
let _user;
// export const configurationUrl= () => {

//     if (production){
//         return "https://developer.api.intuit.com/.well-known/openid_configuration/";
//     }

//     return "https://developer.api.intuit.com/.well-known/openid_sandbox_configuration/";
// }

class LITIntuit {
    
    auth(){
        if (!_auth){
            var ClientOAuth2 = require('client-oauth2')
            _auth = new ClientOAuth2({
                clientId: clientId(),
                clientSecret: clientSecret(),
                accessTokenUri: tokenUrl(),
                authorizationUri: authorizeUrl(),
                redirectUri: redirectUrl(),
                scopes: scopes,
                state: '{"from":"billing"}'
              });
        }
        
        return _auth;   
    }

    realmId() {
        let uri = local.get(KEY_INTUIT_CALLBACK_URI);
        console.log('uri -> ', uri);
        let arr = uri.split('realmId=');
        console.log('arr -> ', JSON.stringify(arr, null, 2));
        if (arr.length > 1) return arr[1];
        return;
    }
    
    user() {
    
        return new Promise( async (resolve, reject) => {
    
            let tokenData = local.get(KEY_INTUIT_TOKEN_DATA);

            console.log('tokenData -> '+tokenData);
            console.log('_user -> '+_user);

            if (_user){
                //refresh user if about to out of data
                let expires = _user.expires;
                let now = new Date();
                console.log('now -> ', now);
                console.log('expires ->', expires);
                let timeRemain = (expires.getTime() - now.getTime())/1000;
                console.log('timeRemain -> '+timeRemain+'s');

                if (timeRemain <= 300){ //should refresh token  
                    //token is about to expired, will refresh intuit user
                    console.log('=== token is about to expired, will refresh intuit user ===');
                    try{
                        _user = await _user.refresh();
                        // console.log(_user);
                        console.log('expires after refresh ->', _user.expires);
                    }catch(e){
                        reject(e);
                        return;
                    }
                }


                resolve(_user);
                return;
            }
    
            if (!tokenData){

                //create user from intuit callback uri 
                // console.log('window.location -> ', window.location);
                
                var uri = window.location.href;

                console.log('uri ->', uri);
                console.log('uri.indexOf("intuit/callback") ->', uri.indexOf('intuit/callback') );
    
                if (uri.indexOf('intuit/callback') === -1) {
                    console.log("intuit callback url is invalid ( "+uri+" )");
                    resolve();
                    return;
                }

                try{
                    _user  = await this.auth().code.getToken(uri);

                    local.set(KEY_INTUIT_CALLBACK_URI, uri);
                    local.set(KEY_INTUIT_TOKEN_DATA, JSON.stringify(_user.data));
                    resolve(_user);
                    return;

                }catch(e){
                    console.log('e -> ', JSON.stringify(e, null, 2));
                    reject({"reason": "parse intuit callback uri failed"});
                    return;
                }

            }else{

                //create and refresh user from local cache 
            
                try{
                    console.log('will use intuit token data from local store');
                    tokenData = JSON.parse(tokenData);
                }catch(e){
                    reject({"reason": "parse intuit token data failed."});
                    return;
                }
                

                try{
                    _user = this.auth().createToken(
                        tokenData['access_token'], 
                        tokenData['refresh_token'], 
                        tokenData['token_type'], 
                        // { data: 'raw user data' }
                    );

                    _user = await _user.refresh();
                    resolve(_user);
                    return;
                    
                }catch(e){
                    reject(e);
                    return;
                }


                
                
            }
    
    
        });
    }

    isValidDate(d) {
        return d instanceof Date && !isNaN(d);
      }

    accessToken(){
        return new Promise( async (resolve, reject) => {

            try{
                let user = await this.user();

                console.log('user -> '+user);

                if (!user){
                    resolve();
                    return;
                }
                
                resolve(user.accessToken);

            }catch(e){
                reject(e);
            }

        });
    }
    
}





const authorizeUrl = () => {
    return "https://appcenter.intuit.com/connect/oauth2";
}

const tokenUrl = () => {
    return "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
}

const revokeUrl = () => {
    return "https://developer.api.intuit.com/v2/oauth2/tokens/revoke";
}

const scopes = [
                "com.intuit.quickbooks.accounting",
                "com.intuit.quickbooks.payment"
             ];
    

const clientId = () => {
    if (production) return "Q0Gv6EbLcGXdVWdpvXrvpZ2alTyPsUAJFbAL4uJBb18AIS3paL";
    return "Q0DvehC7gR5Z6nKoOKOMTQr1cdZCDlbzTJWIB7gTzd0ieuEHFY";
}

const redirectUrl = () => {
    if (production) return "";
    return "http://localhost:3000/intuit/callback";
}
 
const clientSecret = () => {
    if (production) return "H4gSd5dBrxPRN225bCqsw5AfVpD32yl5b78KupJt";
    return "kifJwDZO7ZCUgWHmXQT7R7vMPTb4EUvgD4MIJ5cR";
}

export const qbEndPoint = () => {

    if (production){
        return "https://quickbooks.api.intuit.com/v3/";
    }
    
    return "https://sandbox-quickbooks.api.intuit.com/v3/";
    
}

// - (id)serverUrl{
//     if (self.production) return @"https://quickbooks.api.intuit.com";
//     return @"https://sandbox-quickbooks.api.intuit.com";
// }

// - (id)apiVersion{
//     return @"v3";
// }


// - (id)headers{
//     return @{
//              @"Authorization" : [NSString stringWithFormat:@"Bearer %@", self.token]
//              };
// }


let instance = new LITIntuit();
export default instance;