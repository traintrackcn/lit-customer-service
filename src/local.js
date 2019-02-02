export const KEY_INTUIT_TOKEN_DATA = "KEY_INTUIT_TOKEN_DATA";
export const KEY_INTUIT_CALLBACK_URI = "KEY_INTUIT_CALLBACK_URI";
export const KEY_USER_DATA = "KEY_USER_DATA";
export const KEY_PRJ_DATA = "KEY_PRJ_DATA";

export const KEY_TMP_INTUIT_INVOICE_DATA = "KEY_TMP_INTUIT_INVOICE_DATA";


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

const instance = new LITLocalStore();
export default instance;