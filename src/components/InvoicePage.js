import {Link} from "react-router-dom";
import { useParams } from "react-router"

const InvoicePage = ({invoices}) => {
    let {id} = useParams()
    let invoiceData = invoices.find(item=> item.id === id)
    console.log(invoiceData);
    return (
        <div>
            <Link to="/">Back</Link>
            {(!invoiceData) ? <h1>This invoice does not exist</h1> : <h1>Hello, this is the invoice page {id}</h1>}
        </div>
    )
}

export default InvoicePage
