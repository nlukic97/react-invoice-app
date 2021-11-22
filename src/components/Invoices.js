// import { Link } from 'react-router-dom';

import InvoiceListItem from './InvoiceListItem';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices,message, changedFilter, checkedBoxes}) => {    
    return (
        <div>
            <InvoiceActions message={message} changedFilter={changedFilter} checkedBoxes={checkedBoxes}/>

            <div className="invoice_items_list">
                {invoices.map(invoice=> <InvoiceListItem data={invoice}  key={invoice.id}/>)}
            </div>
        </div>
    )
}

export default Invoices
