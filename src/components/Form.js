import {useState, useEffect} from "react";
import { setPaymentDueDate } from "../methods/HelperMethods";

const Form = ({invoice, submitNewInvoice, discardChanges, updateInvoice}) => {


    
    let emptyInvoice = {
        clientAddress: {
            street:'',
            city:'',
            postCode:'',
            country:''
        },
        clientEmail:'',
        clientName:'',
        createdAt: new Date().toLocaleDateString('en-CA'),
        description:'',
        id:'',
        items:[],
        paymentDue:setPaymentDueDate(new Date(), 30).toLocaleDateString('en-CA'),
        paymentTerms:30,
        senderAddress:{
            street:'',
            city:'',
            postCode:'',
            country:''
        },
        status:'',
        total:0
    };

    let startingData = (invoice || emptyInvoice);
    const [formData, setFormData] = useState(startingData)

    function addNewItem(){
        setFormData({
            ...formData, 
            items: [
                ...formData.items,                 
                // the new item
                {
                    name:'',
                    quantity:null,
                    price:null,
                    total:null
                }
            ]
        })
    }

    function updateData(key, value){
        setFormData({...formData, [key]:value})
    }

    // updates data which is in an object within the state (senderAddress and clientAddress)
    function updateDataInObject(key,objectKey, value){
        let newData = formData
        newData[objectKey][key] = value

        setFormData({...newData})
    }

    function updateFormDataItem(index, key, value){
        setFormData({
            ...formData,
            items: formData.items.map((item, itemIndex)=> (itemIndex === index) ? {...item, [key]:value} : item)
        })
    }

    function changeDates(date){
        let createdAt = date
        let paymentDue = setPaymentDueDate(new Date(date),formData.paymentTerms).toLocaleDateString('en-CA')

        setFormData({...formData, createdAt, paymentDue})
    }
    
    function changePaymentTerms(days){
        let createdAt = formData.createdAt
        let paymentDue = setPaymentDueDate(new Date(createdAt),days).toLocaleDateString('en-CA')
        let paymentTerms = days
    
        setFormData({...formData, createdAt, paymentTerms, paymentDue})

    }

    function deleteInvoiceItem(indexToDelete){
        console.log(indexToDelete);
        let updatedItems = formData.items.filter((item, itemIndex)=> itemIndex !== indexToDelete)

        setFormData({...formData, 
            items: updatedItems,
            total: updatedItems.reduce((prev,curr)=>{
                return prev + curr.total
            },0)
        })
    }


    function quantityChangeTotalCalc(quantity, index){ //receiving NaN, make sure to cater to that
        let price = formData.items[index].price

        let quantityToUse = (isNaN(quantity) ? null : quantity)

        let updatedItems = 
            formData.items.map((item, itemIndex) => {
                    if(itemIndex === index){
                        item.quantity = quantityToUse
                        item.total = (price === null || quantityToUse === null) ? null : price * quantityToUse;
                        return item 
                    } else {
                        return item
                    }
                })

        setFormData({
            ...formData, 
            items: updatedItems,
            total: calcTotalDue(updatedItems)
        })
    }


    function priceChangeTotalCalc(price, index){
        let quantity = formData.items[index].quantity
        
        let priceToUse = (isNaN(price) ? null : price)

        let updatedItems = 
        formData.items.map((item, itemIndex) => {
            if(itemIndex === index){
                item.price = priceToUse
                item.total = (priceToUse === null || quantity === null) ? null : priceToUse * quantity;
                return item 
            } else {
                return item
            }
        })
        
        setFormData({
            ...formData, 
            items: updatedItems,
            total: calcTotalDue(updatedItems)
        })
    }


    // takes an array of objects, and adds up the value for the key 'total' for each of those object
    function calcTotalDue(items){
        return items.reduce((prev,curr)=>{
            return prev + curr.total
        },0)
    }

    useEffect(() => {
        console.log(formData);
    }, [formData])


    return (
        <div className="form-overlay">
            <form className="form">
                {(invoice) === null ? <h1 className="sp-invoice-total">New Invoice</h1>: <h1 className="sp-invoice-total">Edit <span className="color-grayblue">#</span>{formData.id}</h1>}
                
                <h4 className="color-purple-dark purple-label">Bill from</h4>
                
                {/* sender street address */}
                <div className="form-group">
                    <label className="h4 color-grayblue" htmlFor="senderStreet">Street Address</label>
                    <input type="text" name="senderStreet" id="senderStreet" defaultValue={formData.senderAddress.street} onChange={(e)=> updateDataInObject('street','senderAddress', e.target.value)} />
                </div>

                {/* sender city, post code, and country */}
                <div className="city-postcode-country form-group">
                    <div className="form-group-inner">
                        <label className="h4 color-grayblue" htmlFor="senderCity">City</label>
                        <input type="text" name="senderCity" id="senderCity" defaultValue={formData.senderAddress.city} onChange={(e)=> updateDataInObject('city','senderAddress', e.target.value)} />
                    </div>

                    <div className="form-group-inner">
                        <label className="h4 color-grayblue" htmlFor="senderPostCode">Post Code</label>
                        <input type="text" name="senderPostCode" id="senderPostCode" defaultValue={formData.senderAddress.postCode} onChange={(e)=> updateDataInObject('postCode','senderAddress', e.target.value)} />
                    </div>

                    <div className="form-group-inner">
                        <label className="h4 color-grayblue" htmlFor="senderCountry">Country</label>
                        <input type="text" name="senderCountry" id="senderCountry" defaultValue={formData.senderAddress.country} onChange={(e)=> updateDataInObject('country','senderAddress', e.target.value)} />
                    </div>
                </div>


                <h4 className="purple-label color-purple-dark">Bill to</h4>

                {/* client name */}
                <div className="form-group">
                    <label className="h4 color-grayblue" htmlFor="clientName">Client's Name</label>
                    <input type="text" name="clientName" id="clientName" defaultValue={formData.clientName} onChange={e=> updateData('clientName', e.target.value)} />
                </div>

                {/* client email */}
                <div className="form-group">
                    <label className="h4 color-grayblue" htmlFor="clientEmail">Client's Email</label>
                    <input type="text" name="clientEmail" id="clientEmail" defaultValue={formData.clientEmail} onChange={e=> updateData('clientEmail', e.target.value)} />
                </div>

                {/* client city, post code, and country */}
                <div className="form-group city-postcode-country">
                    <div className="form-group-inner">
                        <label className="h4 color-grayblue" htmlFor="clientCity">City</label>
                        <input type="text" name="clientCity" id="clientCity" defaultValue={formData.clientAddress.city} onChange={(e)=> updateDataInObject('street','clientAddress', e.target.value)} />
                    </div>

                    <div className="form-group-inner">
                        <label className="h4 color-grayblue" htmlFor="clientPostCode">Post Code</label>
                        <input type="text" name="clientPostCode" id="clientPostCode" defaultValue={formData.clientAddress.postCode} onChange={(e)=> updateDataInObject('postCode','clientAddress', e.target.value)} />
                    </div>

                    <div className="form-group-inner">
                        <label className="h4 color-grayblue" htmlFor="clientCountry">Country</label>
                        <input type="text" name="clientCountry" id="clientCountry" defaultValue={formData.clientAddress.country} onChange={(e)=> updateDataInObject('country','clientAddress', e.target.value)} />
                    </div>
                </div>

                <div className="dates">
                    <div className="form-group">
                        <label className="h4 color-grayblue" htmlFor="createdAt">Invoice Date</label>
                        <input type="date" name="createdAt" id="createdAt" defaultValue={formData.createdAt} onChange={(e)=> changeDates(e.target.value) } />
                    </div>

                    <div className="form-group">
                        <label className="h4 color-grayblue" htmlFor="paymentTerms">Payment Terms</label>
                        <select name="paymentTerms" id="paymentTerms" defaultValue={formData.paymentTerms} onChange={(e)=> changePaymentTerms(parseInt(e.target.value))}>
                            <option value="1">Net 1 Day</option>
                            <option value="7">Net 7 Days</option>
                            <option value="14">Net 14 Days</option>
                            <option value="30">Net 30 Days</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="h4 color-grayblue" htmlFor="description">Project Description</label>
                    <input type="text" name="description" id="description" defaultValue={formData.description} onChange={(e)=> updateData('description', e.target.value)} />
                </div>

                {/* labels */}
                <div className="items-container color-grayblue sp-labels">
                    <div className="name">Item Name</div>
                    <div className="quantity">QTY.</div>
                    <div className="price">Price</div>
                    <div className="total">Total</div>
                    <div className="phantom-div"></div>
                </div>

                {formData.items.map((item, index)=>{
                    return (
                    <div className="items-container" key={index}>
                        <input type="text" name="name" id="name" defaultValue={item.name} onChange={e=> updateFormDataItem(index,'name',e.target.value)} />
                        <input type="number" name="quantity" id="quantity" defaultValue={item.quantity} onChange={e=> {
                            // updateFormDataItem(index,'quantity',parseInt(e.target.value))
                            quantityChangeTotalCalc(parseInt(e.target.value), index)
                        }} />
                        <input type="number" name="price" id="price" defaultValue={item.price} onChange={e=> {
                            // updateFormDataItem(index,'price',parseFloat(e.target.value))
                            priceChangeTotalCalc(parseFloat(e.target.value), index)
                        }} />
                        <div id="total" className="h4">{(item.total === null) ? null : item.total.toFixed(2) }</div>
                            
                        <button className="deleteItemBtn" onClick={(e)=>{
                            e.preventDefault()
                            deleteInvoiceItem(index)
                        }}>
                            <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z" fill="#888EB0" fillRule="nonzero"/></svg>
                        </button>
                    </div>)

                })}

                <div className="button-container">
                    <button className="btn add-item-btn" onClick={e=>{
                        e.preventDefault()
                        addNewItem()
                    }}>+ Add new item</button>
                </div>

                 {/* if the invoice prop is empty, this would mean that we are creating a new invoice, and this should be shown */}
                    {(invoice === null) ?  (
                        <div className="button-container">
                            <button className="btn gray" onClick={e=>{
                                e.preventDefault()
                                discardChanges()
                            }}>Discard</button>
                            <div>
                                <button className="btn draft" onClick={(e)=>{
                                    e.preventDefault()
                                    submitNewInvoice(formData, 'draft')
                                }}>Save as Draft</button>

                                <button className="btn purple" onClick={(e)=>{
                                    e.preventDefault()
                                    //we need a validation here
                                    submitNewInvoice(formData, 'pending')
                                }}>Save &amp; Send</button>

                            </div>
                        </div>
                    ):(
                        <div className="button-container editing">
                            <button className="btn gray" onClick={(e)=>{
                                e.preventDefault()
                                discardChanges()
                            }}>Cancel</button>

                            <button className="btn purple" onClick={(e)=>{
                                e.preventDefault()
                                updateInvoice(formData)
                            }}>Save Changes</button>
                        </div>
                    )}
            </form>


        </div>
    )
}

export default Form
