import {useState, useEffect} from 'react';

import Invoice from './Invoice';
import InvoiceActions from './InvoiceActions';

const Invoices = ({invoices}) => {
    const [filters, setFilters] = useState(['paid'])

    let message ="";
    
    if(invoices.length === 0){
        message = (`There are no invoices`)
    } else if(invoices.length === 1){
        message = (`There is 1 invoice`)
    } else if(invoices.length > 1) {
        message = (`There are ${invoices.length} invoices`)
    }

    let filterArray = []

    function changedFilter(data){
        let newArr = [];
        let values = Object.values(data)
        let keys = Object.keys(data)
        
        values.forEach((value,index)=> (value === true) ? newArr.push(keys[index]) : null)
        filterArray = newArr;
        console.log(filterArray);
        // setFilters(filterArray) //for some reason this creates an endless loop where this method updates the filters state, the filters state renders the selected boxes which activate this method again
        // gotta find a way to then re-render the data being displayed
    }

    return (
        <div>
            {/* I have a hunch that this might not work, that message will always remain the same? */}
            <InvoiceActions message={message} changedFilter={changedFilter} />

            <div className="invoice_items_list">
                
                {/* still figuring out how to filter how to dfiltere */}
                {invoices.map(invoice=> {
                    if(filters.length === 0){
                        return <Invoice data={invoice} key={invoice.id} className="invoices" /> 

                    } else if(filters.includes(invoice.status)){
                        // here we want to check if the array of filters includes any of the elements from the filter array
                        return <Invoice data={invoice} key={invoice.id} className="invoices" /> 
                    }
                })}

            </div>
        </div>
    )
}

export default Invoices
