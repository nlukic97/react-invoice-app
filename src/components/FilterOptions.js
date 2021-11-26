const FilterOptions = ({changedFilter, checkedBoxes}) => {   

    /**
     * This method passes an object to App.js (by triggering the changedFilter event prop) 
     * with the id of the altered checkbox filter, and the value of its 'checked' attribute. 
     */
    function checkboxChanged(e){
        changedFilter({
            name: e.target.name, 
            value: e.target.checked
        })
    }
    
    
    /**
     * If a user adds filters (checks boxes), visits a single invoice page, and then returns to the invoice page,
     * this method will return the checked status to its most recent state.
     */
    function IsInputChecked(inputId){
        return (checkedBoxes.find(filter=> filter === inputId)) ? true : false
    }

    return (
        <div className='filter-form card'>
            <div className="form-group">
                <input onChange={checkboxChanged} type="checkbox" name="draft" id="draft"  checked={ IsInputChecked("draft") }/>
                <label htmlFor="draft">Draft</label>
            </div>
            <div className="form-group">
                <input onChange={checkboxChanged} type="checkbox" name="pending" id="pending" checked={ IsInputChecked("pending")} />
                <label htmlFor="pending">Pending</label>
            </div>
            <div className="form-group">
                <input onChange={checkboxChanged} type="checkbox" name="paid" id="paid" checked={ IsInputChecked("paid") } />
                <label htmlFor="paid">Paid</label>
            </div>
        </div>
    )
}

export default FilterOptions
