export const getPlans = (prj) => {
    const description = prj.get('description');
    const tag = 'plan';
    const content = getContentBetweenTag(description, tag);
    console.log('content ->', content);
    if (content){
        return content.match(/\w+\s.+/g);
    }

    return [];
}

export const getConfig = (prj, key) => {
    const description = prj.get('description');
    const tag = 'config';
    const content = getContentBetweenTag(description, tag);

    if (content){
        const regex = new RegExp(key+'-->.+', 'g');
        console.log('regex ->', regex);
        // return content.match(/code+-->\w+/g);
        let matches = content.match(regex);
        console.log('matches ->', JSON.stringify(matches, null, 2));

        if (matches && matches.length > 0){
            let value = matches[0].replace(new RegExp(key+'-->', 'g'), '');
            return value;
        }

        return;
    }

    return;
}

export const getContentBetweenTag = (str, tag) => {
    // const description = prj.get('description');
    const regex = new RegExp('\\['+tag+'\\]([\\s\\S]*?)\\['+tag+'\\]', 'g');
    // const regex = /\[plan\]([sS]*?)\[plan\]/g;
    console.log('regex -> ', regex);
    const matches =  str.match(regex);
    console.log('matches -> '+JSON.stringify(matches, null, 2));
    if (matches && matches.length > 0){
        let match = matches[0];
        return match;
    }
    return;
}