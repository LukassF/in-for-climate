import pick from "../functions/pickSuggestion"
import search from "../functions/searchFunc"
import { useRef, useState } from "react"
import WeatherContent from "./weather_content"


export default function WeatherBox({searchSuggestions, setCurrentWeather, setWeatherForecast, setCity, city, currentWeather, setPicked, list}){
    const citySearchRef = useRef(null)

    return(
        <main>
            <section id="weather-box-section">
                <div id="input-box"> 
                    <input
                        type="text"
                        placeholder="Enter a city"
                        onChange={(e) => setCity(e.target.value)}
                        onFocus={() => {
                            document.documentElement.style.setProperty('--box-height','40px')
                        }}
                        ref={citySearchRef}
                    />
                    <button onClick={() => {
                        if(list.length <= 0) return
                        search({setCurrentWeather, setWeatherForecast, city, list})
                        document.documentElement.style.setProperty('--box-height','650px')
                    }}><i className="fa fa-magnifying-glass"/></button>
                </div>
               
                {currentWeather.main !== undefined && 
                    <WeatherContent 
                        currentWeather={currentWeather}
                        city={city}
                    />
                }
            </section>
            
            <div id="dropdown-suggestions">
                {searchSuggestions.map(item => {
                    return(
                        <div key={Math.random()} id="suggestion" onClick={() => pick({name:item.name,country:item.country, setCity, citySearchRef, setPicked})}>
                            <div>
                                <span>{item.name}</span>
                                <span>{item.state}</span>
                            </div>
                            <span>{item.country}</span>
                        </div>
                    )
                })}
            </div> 
        </main>
    )
}