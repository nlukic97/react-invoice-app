import './css/App.css';
import {useState, useEffect} from 'react';

// data
import Data from './data/data.json';

// components
import Sidebar from './components/Sidebar';
import Invoices from './components/Invoices';

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
  
  const [data] = useState(data_to_use)
  const [filters, setFilters] = useState([]) //paid, pending, draft
  

  //upon having the data rendered, log it to the console
  useEffect(function(){
    console.log(filters);
  },[filters])

  
  //Called from component:  ./ ->> Invoices.js ->> InvoiceActions.js ->> FilterOptions.js
  function changedFilter(addedFilter){
    setFilters((addedFilter.value === true) ? [...filters,addedFilter.name] : filters.filter(filter=> filter !== addedFilter.name ))
  }

  //called in the invoices component to apply the 'filters' to it
  function get_filtered_data(){
    return data.filter(item=> filters.includes(item.status))
  }


  return (
    <div className='App'>
      <Sidebar />

      {(filters.length === 0 || filters.length > 2) ? 
          (<Invoices invoices={data} message={`There are ${data.length} invoices`} changedFilter={changedFilter} />)
        :
          (<Invoices invoices={get_filtered_data()} message={`There are ${get_filtered_data().length} ${filters.join(' and ')} invoices`} changedFilter={changedFilter} />)
      }
    </div>
  );
}

export default App;
