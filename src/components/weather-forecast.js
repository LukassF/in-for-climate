import ForecastDay from "./forecastDay"

export default function Forecast({weatherForecast,currentWeather}){
    const today = {time:'Today',min:currentWeather.temp_min, max:currentWeather.temp_max, conditions:currentWeather.main}
    const daysArray = [today,...weatherForecast]
    // const max = Math.max(...daysArray.map(item =>{return Math.round(item.max)}))
    // const min = Math.min(...daysArray.map(item =>{return Math.round(item.max)}))

    // console.log(max,min)
    
    if(weatherForecast.length <= 0) return <div></div>
    
    return(
        <div id="forecast-box">
            {daysArray.map(item => {
                
                return (
                    <ForecastDay
                        key={item.time}
                        conditions={item.conditions}
                        day={item.time.split(' ')[0]}
                        min={Math.round(item.min)}
                        max={Math.round(item.max)}
                    />
                )
            })
            }   
        </div>
    )
}