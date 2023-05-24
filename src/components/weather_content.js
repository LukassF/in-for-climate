import iconArray from '../data/icon.json'
import iso from '../data/iso3166.json'

export default function WeatherContent({currentWeather, city}){
    const icon = iconArray.filter(item => item.conditions === currentWeather.main && item.is_day === currentWeather.is_day)[0].icon
    const cityName = city.split(',')[0]
    const country = iso.filter(item => item.Code === currentWeather.country)[0].Name
    return(
        <section id="weather-content-section">
            <img src={icon} width="120px"></img>
            <div>{cityName}</div>
            <div>{country}</div>
        </section>
    )
}