import axios from 'axios'

export default async function getWeatherLocation(location) {
    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`)

        if (result.status === 200) return { success: true, data: await result.json() }

        else return { success: false, error: result.statusText }

    } catch (err) {

        return { success: false, error: err.message }

    }

}
