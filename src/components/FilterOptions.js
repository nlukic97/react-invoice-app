import {useState, useEffect} from 'react';

const FilterOptions = ({changedFilter}) => {

    const [filters, setFilters] = useState({
        draft:false,
        pending:false,
        paid:false
    })

    // If any of the checkboxes change, the local state of the filters will be changed
    function checkboxChanged(e){
        setFilters({...filters, [e.target.name]:e.target.checked})
    }

    useEffect(()=>{
        changedFilter(filters)
    },[filters, changedFilter])



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
