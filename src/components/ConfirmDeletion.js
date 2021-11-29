

const ConfirmDeletion = ({deleteConfirmation}) => {
    return (
        <div className="overlay delete-box">
            <div className="confirm-delete">
                <h1>Confirm Deletion</h1>
                <span className="confirm-deletion-body">Are you sure you want to delete invoice #XM9141? This action cannot be undone.</span>
                <div>
                    <button className="btn gray" onClick={()=> deleteConfirmation(false)}>Cancel</button>
                    <button className="btn red" onClick={()=> deleteConfirmation(true)}>Delete</button>

                </div>
            </div>
        </div>
    )
}

export default ConfirmDeletion
