export const formattedFirstDateOfMonth = (d) => {
    return d.getFullYear()+'.'+(d.getMonth()+1)+'.'+1;
}

export const formattedLastDateOfMonth = (d) => {
    var ld = new Date(d.getFullYear(), d.getMonth()+1, 0); //last day of the month
    return ld.getFullYear()+'.'+(ld.getMonth()+1)+'.'+ld.getDate();
}