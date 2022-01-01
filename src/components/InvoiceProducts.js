import React from 'react'

const InvoiceProducts = ({item}) => {
    return (
        <div className="items-container">
            <div className="left">
                <h4>{item.name}</h4>
            </div>

            <div className="right">
                <h4 className="quantity color-grayblue">{item.quantity}</h4>
                <h4 className="price color-grayblue">&#163; { (item.price === null) ? null : item.price.toFixed(2) }</h4>
                <h4 className="total">&#163; { (item.total === null) ? null : item.total.toFixed(2) }</h4>
            </div>
        </div>
    )
}

export default InvoiceProducts
