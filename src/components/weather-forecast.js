import calculateGraph from "../functions/calculateGraph"
import ForecastDay from "./forecastDay"

export default function Forecast({weatherForecast,currentWeather}){
    const today = {time:'Today',min:currentWeather.min, max:currentWeather.max, conditions:currentWeather.main}
    const daysArray = [today,...weatherForecast]
    const max = daysArray.map(item =>{return Math.round(item.max)})
    const min = daysArray.map(item =>{return Math.round(item.min)})

    const tempCoordiantes = calculateGraph({max,min})

    if(weatherForecast.length <= 0) return <div></div>
    
    return(
        <div id="forecast-box">
            {daysArray.map((item,index) => {
                
                return (
                    <ForecastDay
                        parametersLine={tempCoordiantes.diff[index]}
                        parametersBox={tempCoordiantes.average[index]}
                        index={index}
                        key={index}
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