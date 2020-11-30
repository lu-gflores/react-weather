import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = () => {

  const [weather, setWeather] = useState(null)

  useEffect(()=> {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=london&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
    .then(data => {
        setWeather(data.data)
         console.log(data.data)
  }).catch(err => console.log(err)) 
  }, [])
 //list[0].weather[0].icon
 // list[0].weather[0].description
    return (
        <>
        {weather && (
        <div>
            <h1>{weather.city.name}</h1>
            
            {weather.list.map(climate => (
            <div className="card" style={{width: '18rem'}}>
                <img key={climate.weather[0].id} src={climate.weather[0].icon} className="card-img-top" alt="..."/>
           <div className="card-body">
                
            <p className="card-text">{climate.weather.description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            ))}     
        </div>
        )}
        </>
        
    )
}

export default Weather
