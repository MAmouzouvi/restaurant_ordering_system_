import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Product';
import Header from './Header';


function App() {
  // const [pro, setPro] = useState([]); // Define 'pro' state

  // useEffect(() => {
  //   // Fetch data and set it to 'pro' state
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('YOUR_API_ENDPOINT_HERE'); // Replace with your API endpoint
  //       const data = await response.json();
  //       setPro(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const [show, setShow] = useState(false);
  const getDta =  (a) => {
    setShow(a);
  }



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Just playing around!! Alia learning Python is Funny
        </a>
      </header> */}
      
      <Header showing={getDta}/>
      <Product toshow={show}/> 

    </div>
  );
}

export default App;
