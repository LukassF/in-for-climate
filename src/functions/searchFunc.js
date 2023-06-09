export const APIkey = "2776200c72d03c5a7a95d9bbdffa5a9f";
export default async function search({setCurrentWeather, setWeatherForecast, city, setLoaded,setHomeScreen}){
    const today = new Date()
    setHomeScreen(false)
    
    //API call for determining current weather conditions
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
    const weatherData = await response.json()
    if(weatherData.cod === '404'){
        setLoaded(true)
        return
    }
    
    //First call for forecast
    const coords = weatherData.coord
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}`)
    const forecast2 = await response2.json()
    
    //Checking if the first day of the forecast array is today
    let nextDays
    const filteredForecast = forecast2.list.filter(item => item.dt_txt.slice(-8,-6) === '12')
    if(new Date(filteredForecast[0].dt_txt).toDateString() === today.toDateString()){
        filteredForecast.shift()
        nextDays = filteredForecast
    }else{
        filteredForecast.pop()
        nextDays = filteredForecast
    }
    const nextDaysFiltered = nextDays.map(item => {return item.weather[0].main})
    
    //Calling a different API, due to better readability of temperatures
    const response3 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin`)
    const forecast3 = await response3.json()

    Object.assign(weatherData.main,{max:forecast3.daily.temperature_2m_max[0], min:forecast3.daily.temperature_2m_min[0]},weatherData.weather[0],weatherData.wind,{country: weatherData.sys.country},{is_day: forecast3.current_weather.is_day})
    const maxTemperatures = forecast3.daily.temperature_2m_max.slice(1,-2)
    const minTemperatures = forecast3.daily.temperature_2m_min.slice(1,-2)
    const time = forecast3.daily.time.slice(1,-2)

    //Formatting final data
    const array = []
    nextDaysFiltered.forEach((item,index) => {
        array.push({conditions: item,max: maxTemperatures[index],min: minTemperatures[index],time:new Date(time[index]).toDateString()})
    })


    //Assigning state
    setWeatherForecast(array)
    setCurrentWeather(weatherData.main)
    setLoaded(true)

    
  }