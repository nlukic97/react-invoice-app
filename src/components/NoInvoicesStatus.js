import React from 'react';
import NoInvoicesImage from '../images/illustration-empty.svg';

const NoInvoicesStatus = ({noInvoiceMessage}) => {
    return (
        <div className="noInvoiceStatus">
            <img src={NoInvoicesImage} alt="No invoices" />
            <h1>{noInvoiceMessage}</h1>
            <p className="h4 color-gray-dark">Create an invoice by clicking the</p>
            <p className="h4 color-gray-dark"><strong>New Invoice</strong> button and get started</p>
        </div>
    )
}

export default NoInvoicesStatus
