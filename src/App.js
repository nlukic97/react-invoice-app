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

  
  //upon having the data rendered, log it to the console
  useEffect(function(){
    // console.log(data);
  },[data])


  return (
    <div className='App'>
      <Sidebar />
      <Invoices invoices={data} />
    </div>
  );
}

export default App;
