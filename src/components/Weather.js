import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = () => {

  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState('')

  useEffect(()=> {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_OPENWEATHER_API_KEY}&q=London`)
    .then(data => {
        setWeather(data.data)
  }).catch(err => console.log(err)) 
  }, [])

  const weatherInput = e => {
      setInput(e.target.value)
  }

  const searchWeather = () => {
      axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_OPENWEATHER_API_KEY}&q=${input}`)
      .then(data => {
          setWeather(data.data)
      })
  }

    return (
    <>
    
    <form className='searchCity'>
            <div className="input-group mb-3">
                <input onChange={weatherInput} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button onClick={searchWeather} type='button' className='btn btn-primary'>Search</button>
            </div>
    </form>
        {weather && (
            <div>

                <h1>{weather.location.name}</h1>
                <h2>{weather.location.region}</h2>
                <h3>{weather.location.country}</h3>
            {/* Rendering Current weather*/}  

            <div className="card" style={{width: '18rem'}}>
                <img src={weather.current.condition.icon} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{weather.current.condition.text}</h5>
                    <p className="card-text">Temperature: {weather.current.temp_c} Celseius</p> 
                    <p className="card-text">Feels like: {weather.current.feelslike_c} Celseius</p> 
                    <p className="card-text">Wind Speed: {weather.current.wind_mph}mph</p> 
                    <p className="card-text">Humidity: {weather.current.humidity}</p> 
                </div>
        </div>
            </div>
        )}
             
    </>   
     )
}

export default Weather
