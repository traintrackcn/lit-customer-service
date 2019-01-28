export const categories = [
    "f", 
    "fn",
    "misc",
    'example',
    "EXPERT",
];

export const platforms = [
    'rn',
    'ios',
    'backup'
];


export const lit = {
    // id: 'VBNAlRZBYCIVexyYqJ1Dte',
    // secret: 'j7gp2Q1Bz4wNGJJUQsWa7LEr3NQ6PRDnNcR2V9E4i'
    // code: 'VBN',
    
    dev: {
        // endpoint: 'http://api.abovegem.com:11442/api/v3/',
        client: {
            id: 'ZlnElLNFjFt6pOBAOQpH8e',
            secret: 'HeFsCAvsXTzpHWAqRVWCibsUYlF7gjpLRUAUw551r',
        },
    },

    pro: {
        // endpoint: 'https://api3.abovegem.com:8443/api/v3/',
        client: {
            id: 'MNENQyECCH8AismbCHp9io',
            secret: '44fjgte3APAZjHrWC6bPCB35teftl0R9YXUjEt4kA',
        },
    }
};


export const isInternal = (key) => {
    if (!key) return false;
    if (key.length<1) return false;
    const firstLetter = key.substring(0, 1);
    const internal = (firstLetter === '_');
    return internal;
}

export const isActive = (key, value) => {
    const internal = isInternal(key);
    if (internal) return true;

    return value.get('active')?value.get('active'):false;
}