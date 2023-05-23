import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");

  async function search(){
    const APIkey = "2776200c72d03c5a7a95d9bbdffa5a9f";
    if (city.length > 0){
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
      const weatherData = await response.json()
      
      const coords = weatherData.coord
      const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin`)
      const forecast = await response2.json()
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={search}></button>
    </>
  );
}
