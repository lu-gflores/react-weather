import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { motion } from 'framer-motion'
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
            <h3>Enter a city:</h3>
            <div className="input-group mb-3">
                <input onChange={weatherInput} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <button onClick={searchWeather} type='button' className='btn btn-primary'>Search</button>
            </div>
    </form>
        {weather && (
            <CurrentWeather>

                <h1>{weather.location.name}</h1>
                <h2>{weather.location.region}</h2>
                <h3>{weather.location.country}</h3>
            {/* Rendering Current weather*/}  

            <CurrentCard className="card" style={{width: '18rem'}}>
                <img src={weather.current.condition.icon} className="card-img-top" alt={weather.current.condition.text}/>
                <div className="card-body">
                    <h5 className="card-title">{weather.current.condition.text}</h5>
                    <p className="card-text">Temperature: {weather.current.temp_c} Celseius</p> 
                    <p className="card-text">Feels like: {weather.current.feelslike_c} Celseius</p> 
                    <p className="card-text">Wind Speed: {weather.current.wind_mph}mph</p> 
                    <p className="card-text">Humidity: {weather.current.humidity}</p> 
                </div>
            </CurrentCard>
          
            {/*Rendering Forecast */}
            <h2>Hourly Forecast</h2>
            <StyledRow>
            {weather.forecast.forecastday[0].hour.slice(0, 4).map((data) =>
            <ForecastCard key={data.time_epoch} className="card" style={{width: '10rem'}}>
                  <img  src={data.condition.icon} className="card-img-top" alt={data.condition.text} />
                    <div className="card-body">
                        <h5 className='card-title'>{data.time}</h5>
                        <p className='card-text'>{data.condition.text}</p>
                    </div>
            </ForecastCard>
                )}

            </StyledRow>
                
            </CurrentWeather>
        )}
             
    </>   
     )
}

const CurrentWeather = styled(motion.div)`
    padding: 1rem 1.5rem;
    h1, h2, h3 {
        text-align: center;
    }
`
const CurrentCard = styled(motion.div)`
    margin: 0 auto;
    float: none;
    margin-bottom: 10px;
`

const ForecastCard = styled(motion.div)`
    display: flex;
    align-items: center;
    margin: 0 auto;
    float: none;
    @media (max-width: 1300px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`
const StyledRow = styled(motion.div)`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
`

export default Weather
