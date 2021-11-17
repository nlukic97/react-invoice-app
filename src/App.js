import './css/App.css';
import {useState, useEffect} from 'react';

// data
import Data from './data/data.json';

// components
import Sidebar from './components/Sidebar';
import Invoices from './components/Invoices';

function App() {

  // data imported from the json file
  const [data] = useState(Data)
  
  //upon having the data rendered, log it to the console
  useEffect(function(){
    console.log(data);
  },[data])


  return (
    <div className='App'>
      <Sidebar />
      
      <Invoices invoices={data} />
    </div>
  );
}

export default App;
