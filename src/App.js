import { useEffect, useState } from "react";
import search from "./functions/searchFunc";
import match from "./functions/matchCities";

export default function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecast, setWeatherForecast] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {
    // console.log(currentWeather,weatherForecast)
  },[currentWeather])

  useEffect(() => {
    if(city.length > 0){
        match({city,setList})
    }
  },[city])

  return (
    <>
      <input
        type="text"
        placeholder="Enter City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => search({setCurrentWeather, setWeatherForecast, city})}></button>
      <div>
        {list.map(item => {
            return `${item.name} - ${item.country}`
        })}
      </div>
    </>
  );
}
