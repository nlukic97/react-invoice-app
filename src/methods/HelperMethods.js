function convertDate(stringDate){
    let date = new Date(stringDate)
    return `${date.getDay()} ${date.toLocaleString('default',{month:'short'})} ${date.getFullYear()}`
}
module.exports = {
    convertDate: convertDate
}