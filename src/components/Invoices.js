import Invoice from './Invoice';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices,message, changedFilter}) => {    
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
