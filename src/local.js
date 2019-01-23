const KEY_TOKEN = "KEY_TOKEN";

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