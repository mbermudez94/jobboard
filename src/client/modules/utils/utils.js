export const dateFormatter = (date) =>{
    if(!date) return null
    let splittedDate1 = date.split('T');
    let splittedDate2 = splittedDate1[0].split('-');
    return `${splittedDate2[2]}`+'/'+`${splittedDate2[1]}`+'/'+`${splittedDate2[0]}`
}