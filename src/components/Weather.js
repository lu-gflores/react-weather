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
 
    return (
        <>
        {weather && (
        <div>
            <h1>{weather.city.name}</h1>
            <div className="card" style={{width: '18rem'}}>
                <img src={weather.list[2].weather.icon} className="card-img-top" alt="..."/>
             <div className="card-body">
                <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        )}
        </>
        
    )
}

export default Weather
