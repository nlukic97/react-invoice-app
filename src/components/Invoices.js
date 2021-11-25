import {useState} from "react";

import Form from './Form';
import InvoiceListItem from './InvoiceListItem';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices,message, changedFilter, checkedBoxes, submitNewInvoice}) => {
        
    const [FormVisibility, setFormVisibility] = useState(false)

    function handleInvoiceSubmit(invoice, status){
        submitNewInvoice(invoice, status)
        setFormVisibility(false)
    }

    return (
        <div>
            <InvoiceActions message={message} changedFilter={changedFilter} checkedBoxes={checkedBoxes} openModalForNewForm={()=> {setFormVisibility(true)}} />

            <div className="invoice_items_list">
                {invoices.map(invoice=> <InvoiceListItem data={invoice}  key={invoice.id}/>)}
            </div>

            {/**  
             * Form will be displayed only upon clicking new invoice btn. 
             * By passing in "null" as the invoice prop, 
             *  this form will serve solely for entering new draft and pending invoices, and it's UI will match this purpose. */}
            {(FormVisibility === true ? <Form invoice={null} submitNewInvoice={handleInvoiceSubmit} discardChanges={()=>{setFormVisibility(false)}} /> : null)}
        </div>
    )
}

export default Invoices
