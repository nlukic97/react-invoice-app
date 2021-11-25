function convertDate(stringDate){
    let date = new Date(stringDate)
    // return `${date.getDay()} ${date.toLocaleString('default',{month:'short'})} ${date.getFullYear()}`

    return date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      })
}
module.exports = {
    convertDate: convertDate
}