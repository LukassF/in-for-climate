import pick from "../functions/pickSuggestion"
import search from "../functions/searchFunc"
import { useRef } from "react"


export default function WeatherBox({searchSuggestions, setCurrentWeather, setWeatherForecast, setCity, city, currentWeather}){
    const citySearchRef = useRef(null)

    return(
        <section id="weather-box-section">
        
            <div id="input-box"> 
                <input
                    type="text"
                    placeholder="Enter a city"
                    onChange={(e) => setCity(e.target.value)}
                    ref={citySearchRef}
                />
                <button onClick={() => search({setCurrentWeather, setWeatherForecast, city})}><i className="fa fa-magnifying-glass"/></button>
            </div>
            <div id="dropdown-suggestions">
                {searchSuggestions.map(item => {
                    return(
                        <div key={Math.random()} id="suggestion" onClick={() => pick({name:item.name,country:item.country, setCity, citySearchRef})}>
                            <div>
                                <span>{item.name}</span>
                                <span>{item.state}</span>
                            </div>
                            <span>{item.country}</span>
                        </div>
                    )
                })}
            </div> 
        </section>
    )
}