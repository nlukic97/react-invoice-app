const Invoice = ({data}) => {
    console.log(data)
    return (
        <div className="_invoice_list_item">
            <div className="left">
                <h1>#{data.id}</h1>
                <span>Due {data.paymentDue}</span>
                <span>{data.clientName}</span>
            </div>
            <div className="right">
                <span>{data.total}&#163;</span>
                <span>{data.status}</span>
            </div>
        </div>
    )
}

export default Invoice
