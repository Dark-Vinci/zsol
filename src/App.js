import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './App.css';
import Body from './component/body/body';
import Footer from './component/footer/footer';
import Header from './component/header/header';

function App() {
  const url = 'https://proj-tom-xv10w.herokuapp.com/api/main/get-food';
  // const url = 'http://localhost:1212/api/main/get-food';
  
  const [ food, setFood ] = useState([]);

  async function fetchHelper (url) {
    try {
      const response = await axios.get(url);  
      console.log(response);

      const data = response.data.data;

      setFood(data);
    } catch(ex) {
      console.log(ex)
    }
  }

  // fetching the foodg
  useEffect(() => {
    fetchHelper(url)
  }, []);

  return (
    <div className="App">
      <Header />
      <Body 
        foods = { food }
      />
      <Footer/>
    </div>
  );
}

export default App;

