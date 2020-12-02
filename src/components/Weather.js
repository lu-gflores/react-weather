import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = () => {

  const [weather, setWeather] = useState(null)

  useEffect(()=> {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_OPENWEATHER_API_KEY}&q=London`)
    .then(data => {
        setWeather(data.data)
        console.log(data.data)
  }).catch(err => console.log(err)) 
  }, [])
 
    return (
    <>
        {weather && (
            <div>
            <h1>{weather.location.name}</h1>
            <h2>{weather.location.region}</h2>
            </div>
        )}
             
    </>   
     )
}

export default Weather
