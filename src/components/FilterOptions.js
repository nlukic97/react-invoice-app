const FilterOptions = ({changedFilter}) => {   

    function checkboxChanged(e){
        changedFilter({
            name: e.target.name, 
            value: e.target.checked
        })
    }


    return (
        <div>
            <div className="form-group">
                <input onClick={checkboxChanged} type="checkbox" name="draft" id="draft" />
                <label htmlFor="draft">Draft</label>
            </div>
            <div className="form-group">
                <input onClick={checkboxChanged} type="checkbox" name="pending" id="pending" />
                <label htmlFor="pending">Pending</label>
            </div>
            <div className="form-group">
                <input onClick={checkboxChanged} type="checkbox" name="paid" id="paid" />
                <label htmlFor="paid">Paid</label>
            </div>
        </div>
    )
}

export default FilterOptions
