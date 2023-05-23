import { useEffect, useState } from "react";
import search from "./functions/searchFunc";

export default function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecast, setWeatherForecast] = useState([])

  useEffect(() => {
    console.log(currentWeather,weatherForecast)
  },[currentWeather, weatherForecast])

  return (
    <>
      <input
        type="text"
        placeholder="Enter City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => search({setCurrentWeather, setWeatherForecast, city})}></button>
    </>
  );
}
