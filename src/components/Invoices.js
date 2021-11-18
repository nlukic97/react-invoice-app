import Invoice from './Invoice';
import InvoiceActions from './InvoiceActions';

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
            <InvoiceActions message={message} />

            <div className="invoice_items_list">
                {invoices.map(invoice=> {
                    return <Invoice data={invoice} key={invoice.id} className="invoices" />
                })}
            </div>
        </div>
    )
}

export default Invoices
