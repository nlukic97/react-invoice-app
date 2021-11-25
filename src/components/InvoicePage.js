import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router"
import {useState} from "react";

import {convertDate} from "../methods/HelperMethods"; //import of custom helper method (used in InvoiceListItem.js and InvoicePage.js)
import Form from "./Form";

const InvoicePage = ({invoices, deleteInvoice, markAsPaid, updateInvoice}) => {

    let navigate = useNavigate()
    let {id} = useParams()
    let invoice = invoices.find(item=> item.id === id)

    // console.log(invoice);

    const [FormVisibility, setFormVisibility] = useState(false)

    function openInvoiceEditModal(){
        setFormVisibility(true)
    }

    function handleInvoiceUpdate(invoice){
        updateInvoice(invoice)
        setFormVisibility(false)
    }
    

    return (
        <div className="single_page_invoice">
            
            {/* This is only displayed if the user clicks the 'edit' button */}
            {(FormVisibility === true ? <Form invoice={invoice} discardChanges={()=>{setFormVisibility(false)}} updateInvoice={handleInvoiceUpdate}/> : null)}
            
            <Link to="/" className="back-link">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6.342.886L2.114 5.114l4.228 4.228" stroke="#9277FF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                <h4>Go back</h4>
            </Link>

            

            {/* If the invoice of a certain ID does not exist, display the error message only */}
            {(!invoice) ? <h1>This invoice does not exist</h1> : (
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
                        <button className="btn gray" onClick={openInvoiceEditModal}>
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
                                <h3 className="id"><span className="color-grayblue">#</span>{invoice.id}</h3>
                                <div className="description body-1 color-grayblue">{invoice.description}</div>
                            </div>

                            <div className="sender_address_container body-2 color-grayblue">
                                <div><span className="street">{invoice.senderAddress.street}</span></div>
                                <div><span className="city">{invoice.senderAddress.city}</span></div>
                                <div><span className="postCode">{invoice.senderAddress.postCode}</span></div>
                                <div><span className="country">{invoice.senderAddress.country}</span></div>
                            </div>
                        </div>

                        <div className="second_line">
                            <div className="dates">
                                <div className="date-item">
                                    <span className="body-1 color-grayblue">Invoice Date</span>
                                    <h3 className="sp-invoice-text">{convertDate(invoice.createdAt)}</h3>
                                </div>

                                <div className="date-item">
                                    <span className="body-1 color-grayblue">Payment Due</span>
                                    <h3 className="sp-invoice-text">{convertDate(invoice.paymentDue)}</h3>
                                </div>
                            </div>

                            <div className="receiver_address">
                                <span className="body-1 color-grayblue">Bill to</span>
                                <h3 className="sp-invoice-text">{invoice.clientName}</h3>

                                <div className="receiver_address_container body-2 color-grayblue">
                                    <div><span className="street">{invoice.clientAddress.street}</span></div>
                                    <div><span className="city">{invoice.clientAddress.city}</span></div>
                                    <div><span className="postCode">{invoice.clientAddress.postCode}</span></div>
                                    <div><span className="country">{invoice.clientAddress.country}</span></div>
                                </div>
                            </div>

                            <div className="client_email">
                                <span className="body-1 color-grayblue">Sent to</span>
                                <h3 className="sp-invoice-text">{invoice.clientEmail}</h3>
                            </div>
                        </div>

                        <div className="invoice-items-card">

                            {/* labels */}
                            <div className="items-container color-grayblue sp-labels">
                                <div className="left">
                                    <span>Item Name</span>
                                </div>

                                <div className="right">
                                    <div className="quantity">QTY.</div>
                                    <div className="price">Price</div>
                                    <div className="total">Total</div>
                                </div>
                            </div>

                            {/* Rendering all items of the invoice */}
                            {invoice.items.map((item,index)=> {
                                return (
                                <div className="items-container" key={index}>
                                    <div className="left">
                                        <h4>{item.name}</h4>
                                    </div>

                                    <div className="right">
                                        <h4 className="quantity color-grayblue">{item.quantity}</h4>
                                        <h4 className="price color-grayblue">&#163; {item.price.toFixed(2)}</h4>
                                        <h4 className="total">&#163; {item.total.toFixed(2)}</h4>
                                    </div>
                                </div>
                                )
                            })}

                            {/* Displaying the total due amount for the invoice */}
                            <div className="amount-due">
                                <span className='body-1'>Amount due</span>
                                <span className="sp-invoice-total">&#163; {invoice.total}</span>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default InvoicePage
