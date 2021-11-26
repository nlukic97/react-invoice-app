function convertDate(stringDate){
    let date = new Date(stringDate)
    // return `${date.getDay()} ${date.toLocaleString('default',{month:'short'})} ${date.getFullYear()}`

    return date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      })
}


// adds the amount of days to add to construct the paymentDue date
function setPaymentDueDate(date = new Date(), days){
    date.setDate(date.getDate() + days);
    return date;
}


// creates a random id for new invoices, and checks if this id is unique amongs our id's. If it's not unique, the method is recursively called again
function getRandomId(invoices){
    function getRandomChar(){
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase()
    }

    function getRandomInt(){
        return Math.floor(Math.random() * 10); //the result include 0 and 9
    }

    let newId =  getRandomChar() + getRandomChar() + getRandomInt() + getRandomInt() + getRandomInt() + getRandomInt()

    if(invoices.find(invoice=> invoice.id === newId) === undefined){
        return newId
    } else {
        return getRandomId(invoices) //recursion in the event that the same id happens to exist
    }
}


module.exports = {
    convertDate: convertDate,
    setPaymentDueDate:setPaymentDueDate,
    getRandomId: getRandomId
}