import FilterOptions from "./FilterOptions";
import {useState} from "react";

const InvoiceActions = ({message, changedFilter, checkedBoxes, openModalForNewForm}) => {
    // used to render or hide the <FilterOptions> component
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="invoice_actions">
            <div className="__heading_and_amount">
                <h1>Invoices</h1>
                <p className='body-1'>{message}</p>
            </div>

            <div className="__action_contols">

                <div className="___filter_container" 
                    // onMouseEnter={()=> setIsHover(true)} 
                    // onMouseLeave={()=>setIsHover(false)}
                    onClick={()=>setIsHover(!isHover)} //this to be used for render in different screen
                >
                    <h4>Filter by status</h4>
                    <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg" style={(isHover === true) ? {transform:'rotate(180deg)'} : {}}><path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    
                    {/* style this */}
                </div>
                    {(isHover === true) ? <FilterOptions changedFilter={changedFilter} checkedBoxes={checkedBoxes}/>:null}


                <button className="btn add-invoice-btn purple" onClick={openModalForNewForm}>
                    <div className="white-circle">
                        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg>
                    </div>
                    <h4>New Invoice</h4>
                </button>
            </div>
        </div>

    )
}

export default InvoiceActions
