import pick from "../functions/pickSuggestion"
import search from "../functions/searchFunc"
import { useRef, useState } from "react"
import WeatherContent from "./weather_content"


export default function WeatherBox({searchSuggestions, setCurrentWeather, setWeatherForecast, setCity, city, currentWeather, setPicked, list}){
    const citySearchRef = useRef(null)
    const dropdownRef = useRef(null)
    const [loaded, setLoaded] = useState(false)

    return(
        <main>
            <section id="weather-box-section">
                <div id="input-box"> 
                    <input
                        type="text"
                        placeholder="Enter a city"
                        onChange={(e) => setCity(e.target.value)}
                        onFocus={() => {
                            dropdownRef.current.style.zIndex = '1'
                            document.documentElement.style.setProperty('--box-height','40px')
                            document.documentElement.style.setProperty('--weather-content-opacity',0)
                            document.documentElement.style.setProperty('--box-shadow-color','transparent')
                        }}
                        ref={citySearchRef}
                    />
                    <button onClick={() => {
                        if(list.length <= 0) return
                        search({setCurrentWeather, setWeatherForecast, city, setLoaded})
                        dropdownRef.current.style.zIndex = '-1'
                        document.documentElement.style.setProperty('--box-height','650px')
                        document.documentElement.style.setProperty('--weather-content-opacity',1)
                    }}><i className="fa fa-magnifying-glass"/></button>
                </div>
               
                {currentWeather.main !== undefined &&
                    loaded ? 
                    <WeatherContent 
                        currentWeather={currentWeather}
                        city={city}
                    />
                    :
                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }
            </section>
            
            <div id="dropdown-suggestions" ref={dropdownRef}>
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