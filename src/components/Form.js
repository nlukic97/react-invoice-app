import React from 'react'

const Form = () => {
    return (
        <form className="form">
            
            <h4 className="color-purple-dark">Bill from</h4>
            
            {/* sender street address */}
            <div className="form-group">
                <label className="h4 color-grayblue" htmlFor="senderStreet">Street Address</label>
                <input type="text" name="senderStreet" id="senderStreet" />
            </div>

            {/* sender city, post code, and country */}
            <div className="city-postcode-country form-group">
                <div className="form-group-inner">
                    <label className="h4 color-grayblue" htmlFor="senderCity">City</label>
                    <input type="text" name="senderCity" id="senderCity" />
                </div>

                <div className="form-group-inner">
                    <label className="h4 color-grayblue" htmlFor="senderPostCode">Post Code</label>
                    <input type="text" name="senderPostCode" id="senderPostCode" />
                </div>

                <div className="form-group-inner">
                    <label className="h4 color-grayblue" htmlFor="senderCountry">Country</label>
                    <input type="text" name="senderCountry" id="senderCountry" />
                </div>
            </div>


            <h4 className="purple-label color-purple-dark">Bill to</h4>

            {/* client name */}
            <div className="form-group">
                <label className="h4 color-grayblue" htmlFor="clientName">Client's Name</label>
                <input type="text" name="clientName" id="clientName" />
            </div>

            {/* client email */}
            <div className="form-group">
                <label className="h4 color-grayblue" htmlFor="clientEmail">Client's Email</label>
                <input type="text" name="clientEmail" id="clientEmail" />
            </div>

            {/* client city, post code, and country */}
            <div className="form-group city-postcode-country">
                <div className="form-group-inner">
                    <label className="h4 color-grayblue" htmlFor="clientCity">City</label>
                    <input type="text" name="clientCity" id="clientCity" />
                </div>

                <div className="form-group-inner">
                    <label className="h4 color-grayblue" htmlFor="clientPostCode">Post Code</label>
                    <input type="text" name="clientPostCode" id="clientPostCode" />
                </div>

                <div className="form-group-inner">
                    <label className="h4 color-grayblue" htmlFor="clientCountry">Country</label>
                    <input type="text" name="clientCountry" id="clientCountry" />
                </div>
            </div>

            <div className="dates">
                <div className="form-group">
                    <label className="h4 color-grayblue" htmlFor="createdAt">Invoice Date</label>
                    <input type="date" name="createdAt" id="createdAt" value={new Date().toLocaleDateString('en-CA')} onChange={(e)=> {}} />
                </div>

                <div className="form-group">
                    <label className="h4 color-grayblue" htmlFor="paymentTerms">Payment Terms</label>
                    <select name="paymentTerms" id="paymentTerms" defaultValue="30">
                        <option value="1">Net 1 Day</option>
                        <option value="7">Net 7 Days</option>
                        <option value="14">Net 14 Days</option>
                        <option value="30">Net 30 Days</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="h4 color-grayblue" htmlFor="description">Project Description</label>
                <input type="text" name="description" id="description" />
            </div>

            {/* labels */}
            <div className="items-container color-grayblue sp-labels">
                <div className="name">Item Name</div>
                <div className="quantity">QTY.</div>
                <div className="price">Price</div>
                <div className="total">Total</div>
                <div className="phantom-div"></div>
            </div>

    
            <div className="items-container">
                    <input type="text" name="name" id="name" />
                    <input type="number" name="quantity" id="quantity" />
                    <input type="number" name="price" id="price" />
                    <input type="number" name="total" id="total" />
                    
                    <button>
                        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/></svg>
                    </button>

            </div>

            <div className="button-container">
                <button className="btn add-item-btn">+ Add new item</button>
            </div>
                
        </form>
    )
}

export default Form
