export const KEY_TOKEN = "KEY_TOKEN";
export const KEY_INTUIT_TOKEN_DATA = "KEY_INTUIT_TOKEN_DATA";
export const KEY_INTUIT_CALLBACK_URI = "KEY_INTUIT_CALLBACK_URI";



class LITLocalStore {
    set(key, value) {
        localStorage.setItem(key, value);
    }
    
    get(key){
        // getter
        return localStorage.getItem(key);
    }
    
    remove(key){
        // getter
        return localStorage.removeItem(key);
    }
}





export const setToken = (token) => {
    localStorage.setItem(KEY_TOKEN, token);
}

export const getToken = () => {
    // getter
    return localStorage.getItem(KEY_TOKEN);
}

export const removeToken = () => {
    // getter
    return localStorage.removeItem(KEY_TOKEN);
}


const instance = new LITLocalStore();
export default instance;