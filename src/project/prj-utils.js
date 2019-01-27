export const getPlans = (prj) => {
    const description = prj.get('description');
    const regex = /\[plan\]([\s\S]*?)\[plan\]/g;
    const matches =  description.match(regex);
    console.log('matches -> '+JSON.stringify(matches, null, 2));
    if (matches && matches.length > 0){
        let match = matches[0];
        let plans = match.match(/\w+\s.+/g);
        console.log('plans -> '+JSON.stringify(plans, null, 2));
        return plans;
    }

    return [];
}