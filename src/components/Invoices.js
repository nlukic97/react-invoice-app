// import { Link } from 'react-router-dom';

import Invoice from './Invoice';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices,message, changedFilter, checkedBoxes}) => {    
    return (
        <div>
            <InvoiceActions message={message} changedFilter={changedFilter} checkedBoxes={checkedBoxes}/>

            <div className="invoice_items_list">
                {/* {invoices.map(invoice=> <Invoice data={invoice} key={invoice.id} className="invoices" /> )} */}
                {invoices.map(invoice=> {
                    return (
                        <Invoice data={invoice}  key={invoice.id}/>
                    // <Link to={`invoice/${invoice.id}`} className="invoiceLink" key={invoice.id}>
                    //     <Invoice data={invoice}  />
                    // </Link>
                    )
                } )}
            </div>
        </div>
    )
}

export default Invoices
