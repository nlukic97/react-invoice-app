import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router"

const InvoicePage = ({invoices, deleteInvoice, markAsPaid}) => {

    let navigate = useNavigate()
    let {id} = useParams()
    let invoice = invoices.find(item=> item.id === id)

    console.log(invoice);
    
    function convertDate(stringDate){
        let date = new Date(stringDate)
        return `${date.getDay()} ${date.toLocaleString('default',{month:'short'})} ${date.getFullYear()}`
    }

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

                    <div className="first_line">
                        <div className="id_description_container">
                            <div className="id">#{invoice.id}</div>
                            <div className="description">{invoice.description}</div>
                        </div>

                        <div className="sender_address_container">
                            <div><span className="street">{invoice.senderAddress.street}</span></div>
                            <div><span className="city">{invoice.senderAddress.city}</span></div>
                            <div><span className="postCode">{invoice.senderAddress.postCode}</span></div>
                            <div><span className="country">{invoice.senderAddress.country}</span></div>
                        </div>
                    </div>

                    <div className="second_line">
                        <div className="dates">
                            <div className="date-item">
                                <span className="body-1">Invoice Date</span>
                                <h4>{convertDate(invoice.createdAt)}</h4>
                            </div>

                            <div className="date-item">
                                <span className="body-1">Payment Due</span>
                                <h4>{convertDate(invoice.paymentDue)}</h4>
                            </div>
                        </div>

                        <div className="receiver_address">
                            <span className="body-1">Bill to</span>
                            <h4>{invoice.clientName}</h4>

                            <div className="receiver_address_container">
                                <div><span className="street">{invoice.clientAddress.street}</span></div>
                                <div><span className="city">{invoice.clientAddress.city}</span></div>
                                <div><span className="postCode">{invoice.clientAddress.postCode}</span></div>
                                <div><span className="country">{invoice.clientAddress.country}</span></div>
                            </div>
                        </div>

                        <div className="email">
                            <span className="body-1">Sent to</span>
                            <div><span>{invoice.clientEmail}</span></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InvoicePage
