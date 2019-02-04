export const formattedFirstDateOfMonth = (d) => {

    const M = (d.getMonth()+1);
    const D = 1;

    return d.getFullYear()+'-'+formatToTwoDigits(M)+'-'+formatToTwoDigits(D);
}

export const formattedLastDateOfMonth = (d) => {
    var ld = new Date(d.getFullYear(), d.getMonth()+1, 0); //last day of the month
    const M = (d.getMonth()+1);
    const D = ld.getDate();
    
    return d.getFullYear()+'-'+formatToTwoDigits(M)+'-'+formatToTwoDigits(D);
}

const formatToTwoDigits = (number) => {
    var str = String(number);
    if (str.length === 2) return str;
    return '0'+str;
}