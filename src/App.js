import { useEffect, useState } from "react";
import search from "./functions/searchFunc";
import match from "./functions/matchCities";
import './styles/main.css'
import WeatherBox from "./components/weather-box";

export default function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecast, setWeatherForecast] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    if(city.length > 0){
        match({city,setList})
    }else{setList([])}
  },[city])

  useEffect(() => {
    if(list.length>0) document.documentElement.style.setProperty('--dropdown-opacity', 1)
    else document.documentElement.style.setProperty('--dropdown-opacity', 0)
  },[list])

  return (
    <>
      <WeatherBox 
        searchSuggestions={list}
        setCurrentWeather={setCurrentWeather}        
        setWeatherForecast={setWeatherForecast}
        setCity={setCity}
        currentWeather={currentWeather}
        city={city}
        />
    </>
  );
}
