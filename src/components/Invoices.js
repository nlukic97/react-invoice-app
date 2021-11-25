// import { Link } from 'react-router-dom';
import Form from './Form';

import InvoiceListItem from './InvoiceListItem';
import InvoiceActions from './InvoiceActions';

const Invoices = ({
    invoices,
    message, 
    changedFilter, 
    checkedBoxes, 
    
    submitNewInvoice
    }) => {    

    return (
        <div>
            <InvoiceActions message={message} changedFilter={changedFilter} checkedBoxes={checkedBoxes}/>

            <div className="invoice_items_list">
                {invoices.map(invoice=> <InvoiceListItem data={invoice}  key={invoice.id}/>)}
            </div>

            {/* <Form invoice={invoices[0]} /> */}
            <Form invoice={null} submitNewInvoice={submitNewInvoice} />
        </div>
    )
}

export default Invoices
