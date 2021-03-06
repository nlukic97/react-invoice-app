import {Link} from "react-router-dom";

import {convertDate} from "../methods/HelperMethods"; //import of custom helper method (used in InvoiceListItem.js and InvoicePage.js)

const InvoiceListItem = ({data}) => {
    return (
        <Link to={`invoice/${data.id}`} className="_invoice_list_item card">
            <div className="left">
                <h4 className="__id"><span className="color-grayblue">#</span>{data.id}</h4>

                <h4 className="__due_date">
                    <span className="color-gray-dark">Due </span>
                    <span className="color-grayblue">{convertDate(data.paymentDue)}</span>
                </h4>

                <h4 className="__client_name">{data.clientName}</h4>
            </div>
            
            <div className="right">
                <h3 className="__amount">&#163; {data.total.toFixed(2)}</h3>

                <div className={`__invoice_status ${data.status}`}>
                    <div className='__invoice_status_circle'></div>
                    <span>{data.status}</span>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="10"><path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
            </div>
        </Link>
    )
}

export default InvoiceListItem
