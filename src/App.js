import './css/App.css';
import {useState, useEffect} from 'react';

// data
import Data from './data/data.json';

// components
import Sidebar from './components/Sidebar';

function App() {

  // data imported from the json file
  const [data, setData] = useState(Data)
  
  //upon having the data rendered, log it to the console
  useEffect(function(){
    console.log(data);
  },[data])


  return (
    <div>
      <Sidebar />
      <h1>Cao</h1>
    </div>
  );
}

export default App;
