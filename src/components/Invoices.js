import Invoice from './Invoice';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices,message, changedFilter}) => {    
    function changeMessage(data){
        let msg;
        
        if(data.length === 0){
            msg =  `There are no invoices`
        } else if(data.length === 1){
            msg =  `There is 1 invoice`
        } else if(data.length > 1) {
            msg =  `There are ${data.length} invoices`
        }

        return msg
    }

    return (
        <div>
            <InvoiceActions message={message} changedFilter={changedFilter} />

            <div className="invoice_items_list">
                {invoices.map(invoice=> <Invoice data={invoice} key={invoice.id} className="invoices" /> )}
            </div>
        </div>
    )
}

export default Invoices
