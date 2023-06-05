import pick from "../functions/pickSuggestion"
import search from "../functions/searchFunc"
import { useRef, useState, useEffect } from "react"
import WeatherContent from "./weather_content"
import Forecast from "./weather-forecast"


export default function WeatherBox({searchSuggestions, setCurrentWeather, setWeatherForecast, setCity, city, currentWeather, setPicked, list, weatherForecast, setHomeScreen}){
    const citySearchRef = useRef(null)
    const dropdownRef = useRef(null)
    const [loaded, setLoaded] = useState(true)
    
    useEffect(() => {
        if(!loaded)
        search({setCurrentWeather, setWeatherForecast, city, setLoaded,setHomeScreen})
    },[loaded])

    function searchPress(){
        if(list.length <= 0) return
        setLoaded(false)
        dropdownRef.current.style.zIndex = '-1'
        document.documentElement.style.setProperty('--box-height','650px')
        document.documentElement.style.setProperty('--weather-content-opacity',1)
    }

    return(
        <main>
            <section id="weather-box-section">
                <div id="input-box"> 
                    <input
                        type="text"
                        placeholder="Enter a city"
                        onChange={(e) => setCity(e.target.value)}
                        onFocus={() => {
                            setHomeScreen(true)
                            dropdownRef.current.style.zIndex = '1'
                            document.documentElement.style.setProperty('--box-height','40px')
                            document.documentElement.style.setProperty('--weather-content-opacity',0)
                        }}
                        onKeyDown={(e) => {
                            if(e.key === "Enter"){
                                searchPress()
                                e.target.blur()
                            }
                        }}
                        ref={citySearchRef}
                    />
                    <button onClick={searchPress}><i className="fa fa-magnifying-glass"/></button>
                </div>
               
                {currentWeather.main !== undefined ?
                    <WeatherContent 
                        currentWeather={currentWeather}
                        city={city}
                    />
                    :
                    loaded ?
                    <div className="no-results">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-2130355-1800920.png" width="80%"></img>
                        <h1 style={{color:'white'}}>Oops! No matches found.</h1>
                    </div>
                    :
                    <div></div>
                }

                {currentWeather.main !== undefined && 
                    <Forecast weatherForecast={weatherForecast} currentWeather={currentWeather}/>
                }
                {(!loaded && currentWeather.main === undefined)&& 
                    <div className="lds-facebook"><div></div><div></div><div></div></div>
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