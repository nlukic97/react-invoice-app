import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router"

const InvoicePage = ({invoices, deleteInvoice, markAsPaid}) => {
    let navigate = useNavigate()

    let {id} = useParams()
    let invoice = invoices.find(item=> item.id === id)
    console.log(invoice);
    return (
        <div>
            <Link to="/">Back</Link>
            {(!invoice) ? <h1>This invoice does not exist</h1> : <h1>Hello, this is the invoice page {invoice.id}</h1>}

            <div className="card">
                {/* Status container */}
                <div className="status">
                    <span>status </span>
                    <div className={`__invoice_status ${invoice.status}`}>
                        <div className='__invoice_status_circle'></div>
                        <span>{invoice.status}</span>
                    </div>
                </div>

                {/* Button container */}
                <div className="button-container">
                    <button className="btn gray">
                        <h4>Edit</h4>
                    </button>

                    <button className="btn red" onClick={()=>{
                        //delete invoice and navigate back to home page
                        deleteInvoice(invoice.id)
                        navigate('/')
                    }}>
                        <h4>Delete</h4>
                    </button>

                    <button className="btn purple" onClick={()=>{markAsPaid(invoice.id)}}>
                        <h4>Mark as Paid</h4>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default InvoicePage
