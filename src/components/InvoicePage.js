import {Link} from "react-router-dom";
import { useParams } from "react-router"

const InvoicePage = ({invoices}) => {
    let {id} = useParams()
    let invoice = invoices.find(item=> item.id === id)
    console.log(invoice);
    return (
        <div>
            <Link to="/">Back</Link>
            {(!invoice) ? <h1>This invoice does not exist</h1> : <h1>Hello, this is the invoice page {invoice.id}</h1>}

            <div style={{backgroundColor:'#FFFFFF'}}>
                <span>status </span>

                <div className={`__invoice_status ${invoice.status}`}>
                    <div className='__invoice_status_circle'></div>
                    <span>{invoice.status}</span>
                </div>

                <button className="btn gray"><h4>Edit</h4></button>
                <button className="btn red"><h4>Delete</h4></button>
                <button className="btn purple"><h4>Mark as Paid</h4></button>
            </div>
        </div>
    )
}

export default InvoicePage
