let production = false;

// export const configurationUrl= () => {

//     if (production){
//         return "https://developer.api.intuit.com/.well-known/openid_configuration/";
//     }

//     return "https://developer.api.intuit.com/.well-known/openid_sandbox_configuration/";
// }


export const authorizeUrl = () => {
    return "https://appcenter.intuit.com/connect/oauth2";
}

export const tokenUrl = () => {
    return "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
}

export const revokeUrl = () => {
    return "https://developer.api.intuit.com/v2/oauth2/tokens/revoke";
}

export const scopes = [
                "com.intuit.quickbooks.accounting",
                "com.intuit.quickbooks.payment"
             ];
    

export const clientId = () => {
    if (production) return "Q0Gv6EbLcGXdVWdpvXrvpZ2alTyPsUAJFbAL4uJBb18AIS3paL";
    return "Q0DvehC7gR5Z6nKoOKOMTQr1cdZCDlbzTJWIB7gTzd0ieuEHFY";
}

export const redirectUrl = () => {
    if (production) return "";
    return "http://localhost:3000/intuit/callback";
}
 
export const clientSecret = () => {
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
