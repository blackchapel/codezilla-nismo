import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {

  const[data, setData] = useState("");
  async function fetchData() {
    const res = await axios.get(`/api`);
    setData(res.data.message);
  }
  useEffect(async () => {
   
   fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <p>{!data ? "Loading..." : data} </p>
          
      </header>
    </div>
  );
}

export default App;
