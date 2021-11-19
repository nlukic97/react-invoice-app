import {useState} from 'react';

import Invoice from './Invoice';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices}) => {
    const [filters, setFilters] = useState([]) //paid, pending, draft

    let message =""; // this should perhaps be in state
    
    if(invoices.length === 0){
        message = (`There are no invoices`)
    } else if(invoices.length === 1){
        message = (`There is 1 invoice`)
    } else if(invoices.length > 1) {
        message = (`There are ${invoices.length} invoices`)
    }

    function changedFilter(addedFilter){
        setFilters((addedFilter.value === true) ? [...filters,addedFilter.name] : filters.filter(filter=> filter !== addedFilter.name ))
    }

    function render_all_invoices(){
        return invoices.map(invoice=> {
            return <Invoice data={invoice} key={invoice.id} className="invoices" /> 
        })
    }
    
    function render_filtered_invoices(){
        return invoices.map(invoice=>{
            if(filters.includes(invoice.status)){
                return <Invoice data={invoice} key={invoice.id} className="invoices" /> 
            } else {
                return null
            }
        })
    }

    return (
        <div>
            {/* I have a hunch that this might not work, that message will always remain the same? */}
            <InvoiceActions message={message} changedFilter={changedFilter} />

            <div className="invoice_items_list">
                
                {(filters.length < 1 ? render_all_invoices() : render_filtered_invoices())}

            </div>
        </div>
    )
}

export default Invoices
