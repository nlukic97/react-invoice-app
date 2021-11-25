import './css/App.css';
import {useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import InvoicePage from './components/InvoicePage';

// data
import Data from './data/data.json';

// components
import Sidebar from './components/Sidebar';
import Invoices from './components/Invoices';
import Form from './components/Form';

function App() {

  // data imported from the json file
  let localStorageData = JSON.parse(localStorage.getItem('invoice-data'))
  let data_to_use;

  if(localStorageData){
    data_to_use = localStorageData
  } else {
    data_to_use =  Data
    localStorage.setItem('invoice-data',JSON.stringify(data_to_use))
  }
  
  const [data, setData] = useState(data_to_use)
  const [filters, setFilters] = useState([]) //paid, pending, draft

  /** 
   * the number of different invoice statues that the invoices can be filtered by. 
   * If increasing this number from 3, change the state and update the method 'get_filtered_data_msg' as described in the comments
   * */
  const [num_of_filters] = useState(3) 

  
  //Called from component:  ./ ->> Invoices.js ->> InvoiceActions.js ->> FilterOptions.js
  function changedFilter(addedFilter){
    setFilters((addedFilter.value === true) ? [...filters,addedFilter.name] : filters.filter(filter=> filter !== addedFilter.name ))
  }

  //called in the invoices component to apply the 'filters' to it
  function get_filtered_data(){
    return data.filter(item=> filters.includes(item.status))
  }

  /**
   * This will return the message in case a filter is added that does not apply 
   * to all the invoices (1 or 2 filters). It will tell us how many of each type of invoice we have.
   * Example where the 'paid' and 'pending' filter are applied:    'There are 3 paid and 2 pending invoices'
   */
  function get_filtered_data_msg(filtered_invoices){
    return filters.map(filter=>{

      //getting number of all invoices that match the filter from the map function
      return `
      ${filtered_invoices.reduce((prev, curr)=>{
        if(curr.status === filter){
          return prev + 1
        } else {
          return prev
        }
      },0)} ${filter}` // returning reduce method which counts the invoices that have a status matching the filter from the map method + the name of the filter

    })
    
    /** This is currently enough since we only have 3 filters. 
     * If more are added, comment the line underneath and uncomment the next large block comment. 
     * It will also work now if you do it now, but is currently an uncesessary extra step. */
    .join(' and ') 


    // adds a , to the end of all items in the array, but adding ' and ' before the last element
    /*
    .map((amount_info, index, array)=>{
      if(array.length === 1){
        return amount_info
      } else {

        if(index < array.length - 2){
          return amount_info + ', '

        } else if( index < array.length - 1){
          return amount_info

        } else {
          return ' and ' + amount_info;
        }

      }
    }).join('')
    */
  }


  // method to supply the '/' route with the correct invoice list page depending on the status of the filter
  function renderInvoices(){
    if(filters.length === 0 || filters.length > num_of_filters - 1){
      return (<Invoices invoices={data} message={`There are ${data.length} invoices`} changedFilter={changedFilter} checkedBoxes={filters} />)
    } else {
      return (<Invoices invoices={get_filtered_data()} message={`There are ${get_filtered_data_msg(get_filtered_data())} invoices`} changedFilter={changedFilter} checkedBoxes={filters} />)
    }
  }

  // deletes an invoice from the InvoicePage component
  function deleteInvoice(invoiceId){
    let newData = data.filter(item => item.id !== invoiceId)
    setData(newData)
    //save to local storage after this, maybe with 'use effect'?
  }

  // marks an invoice as paid from the single invoice page (InvoicePage.js)
  function markAsPaid(invoiceId){
    setData(data.map(invoice=> (invoice.id === invoiceId && invoice.status !== 'paid') ? {...invoice, status:'paid'} : invoice))
    //save to local storage after this, maybe with 'use effect'?
  }


  return (
    <div className='App'>
      {/* <Sidebar /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={renderInvoices()}/>
            <Route path="/invoice/:id" element={<InvoicePage invoices={data} deleteInvoice={deleteInvoice} markAsPaid={markAsPaid} />} />
            {/* <Route path="/form" element={<Form/>} /> */}
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
