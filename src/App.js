import React, { useState, useEffect } from 'react';
import axios from  'axios'
import Navbar from './components/layout/Navbar'
import GlobalStyles from './components/GlobalStyle'

function App() {

  const [weather, setWeather] = useState({})

 useEffect(()=> {
   axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=london&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
   .then(data => {
      console.log(data)
 }).catch(err => console.log(err)) 
 }, [])

    return (
      <div className="App">
      <GlobalStyles />
        <Navbar />
      </div>
    );


}

export default App;
