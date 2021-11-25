import {useState, useEffect} from "react";

const Form = ({invoice}) => {
    
    let emptyInvoice = {
        clientAddress: {
            street:'',
            city:'',
            postCode:'',
            country:''
        },
        clientEmail:'',
        clientName:'',
        createdAt:'',
        description:'',
        id:'',
        items:[],
        paymentDue:'',
        paymentTerms:1,
        senderAddress:{
            street:'',
            city:'',
            postCode:'',
            country:''
        },
        status:'',
        total:null
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
        let newData = formData
        newData.items[index][key] = value

        setFormData({...formData, items: formData.items.map(item=> (item.id === index) ? item[key] = value : item)})
    }

    function deleteInvoiceItem(indexToDelete){
        console.log(indexToDelete);
        setFormData({...formData, items: formData.items.filter((item, itemIndex)=> itemIndex !== indexToDelete)})
    }

    useEffect(() => {
        console.log(formData);
    }, [formData])


    return (
        <div className="form-overlay">
            <form className="form">
                
                <h4 className="color-purple-dark">Bill from</h4>
                
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
                        <input type="date" name="createdAt" id="createdAt" defaultValue={formData.createdAt} onChange={(e)=> {}} />
                    </div>

                    <div className="form-group">
                        <label className="h4 color-grayblue" htmlFor="paymentTerms">Payment Terms</label>
                        <select name="paymentTerms" id="paymentTerms" defaultValue="30" defaultValue={formData.paymentTerms} onChange={(e)=> updateData('paymentTerms', parseInt(e.target.value))}>
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
                        <input type="number" name="quantity" id="quantity" defaultValue={item.quantity} onChange={e=> updateFormDataItem(index,'quantity',parseFloat(e.target.value) )} />
                        <input type="number" name="price" id="price" defaultValue={item.price} onChange={e=> updateFormDataItem(index,'price',parseFloat(e.target.value) )} />
                        <input type="number" name="total" id="total" defaultValue={item.total} onChange={e=> updateFormDataItem(index,'total',parseFloat(e.target.value) )} />
                            
                        <button onClick={(e)=>{
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
                    
            </form>
        </div>
    )
}

export default Form
