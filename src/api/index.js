import axios from 'axios'
const url = 'https://api.openweathermap.org/data/2.5/forecast?q='

export const fetchWeatherLocation = async (location) => {
    let changeUrl = url

    if (location) {
        changeUrl = `${url}${location}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    }

    try {
        const { data: { list, city } } = await axios.get(changeUrl);

        return { list, city };

    } catch (err) {

        return { success: false, error: err.message }

    }

}

export const fetchFiveDayForecast = async () => {
    try {
        const { data } = await axios.get(`${url}/`)
    } catch (err) {

    }
}
