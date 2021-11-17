import Invoice from './Invoice';

const Invoices = ({invoices}) => {
    let message ="";
    
    if(invoices.length === 0){
        message = (`There are no invoices`)
    } else if(invoices.length === 1){
        message = (`There is 1 invoice`)
    } else if(invoices.length > 1) {
        message = (`There are ${invoices.length} invoices`)
    }

    return (
        <div>
            <h1>Invoices</h1>
            <p className='body-1'>{message}</p>

            {invoices.map(invoice=> <Invoice data={invoice} key={invoice.id} /> )}
        </div>
    )
}

export default Invoices
