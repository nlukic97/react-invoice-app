import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router"

const InvoicePage = ({invoices, deleteInvoice, markAsPaid}) => {

    let navigate = useNavigate()
    let {id} = useParams()
    let invoice = invoices.find(item=> item.id === id)

    console.log(invoice);

    return (
        <div className="single_page_invoice">
            <Link to="/">Back</Link>
            {(!invoice) ? <h1>This invoice does not exist</h1> : <h1>Hello, this is the invoice page {invoice.id}</h1>}

            <div className="flex-container">
                
                {/* 1. Status container */}
                <div className="status-container card">
                    <span className="status_label body-1">Status</span>
                    <div className={`__invoice_status ${invoice.status}`}>
                        <div className='__invoice_status_circle'></div>
                        <span>{invoice.status}</span>
                    </div>
                </div>

                {/* 2 Button container */}
                <div className="button-container card">
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

                    {invoice.status !== 'paid' ? (
                        <button className="btn purple" onClick={()=>{markAsPaid(invoice.id)}}>
                            <h4>Mark as Paid</h4>
                        </button>)
                    :
                        (null)
                    }
                </div>
                
                {/* 3. Invoice data */}
                <div className="data-container card">
                    
                    <div className="id_address_container">
                        <div className="id_description_container">
                            <span className="id">#{invoice.id}</span>
                            <span className="description">{invoice.description}</span>
                        </div>
                    </div>
                    <div className="sender_address_container">
                        <span className="street">{invoice.senderAddress.street}</span>
                        <span className="city">{invoice.senderAddress.city}</span>
                        <span className="postCode">{invoice.senderAddress.postCode}</span>
                        <span className="country">{invoice.senderAddress.country}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoicePage
