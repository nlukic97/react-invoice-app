import React from 'react'

const InvoiceProductsMobile = ({item}) => {
    return (
        <div className='items-container-mobile'>
            <div style={{display:"flex",flexDirection:"column"}}>
                <h3>{item.name}</h3>
                <span class="price color-grayblue bold">{item.quantity} x &#163; { (item.price === null) ? null : item.price.toFixed(2) }</span>
            </div>
            <div class="total bold">&#163; { (item.total === null) ? null : item.total.toFixed(2) }</div>
        </div>
    )
}

export default InvoiceProductsMobile
