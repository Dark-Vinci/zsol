import './App.css';
import Header from './component/header/header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Body from './component/body/body';
import Footer from './component/footer/footer';

function App() {
  const url = 'https://asm-dev-api.herokuapp.com/api/v1/food';
  let [ datai, setData ] = useState([]);

  // fetching the food
  useEffect(() => {
    (async function fetchFunction() {
      try {
        const response = await axios.get(url);
        const data = response.data.data.meals;
        setData(data);
      } catch(ex) {
        console.log(ex)
      }
    })()
  }, []);

  return (
    <div className="App">
      <Header />
      <Body 
        foods = { datai }
      />
      <Footer/>
    </div>
  );
}

export default App;

