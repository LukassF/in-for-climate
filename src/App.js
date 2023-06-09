import { useEffect, useState } from "react";
import match from "./functions/matchCities";
import "./styles/main.css";
import WeatherBox from "./components/weather-box";
import Navbar from "./components/navbar";
import Logo from "./components/logo";
import { CSSTransition } from "react-transition-group";

export default function App() {
  const [city, setCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [weatherForecast, setWeatherForecast] = useState([]);
  const [list, setList] = useState([]);
  const [picked, setPicked] = useState(false);
  const [homeScreen, setHomeScreen] = useState(true);

  useEffect(() => {
    if (city.length > 0) {
      match({ city, setList });
    } else {
      setList([]);
    }
    setCurrentWeather({});
  }, [city]);

  useEffect(() => {
    if (list.length > 0 && !picked)
      document.documentElement.style.setProperty("--dropdown-opacity", 1);
    else document.documentElement.style.setProperty("--dropdown-opacity", 0);
    setPicked(false);
  }, [list]);

  return (
    <>
      <Navbar />
      <WeatherBox
        searchSuggestions={list}
        setCurrentWeather={setCurrentWeather}
        setWeatherForecast={setWeatherForecast}
        setCity={setCity}
        currentWeather={currentWeather}
        city={city}
        setPicked={setPicked}
        list={list}
        weatherForecast={weatherForecast}
        setHomeScreen={setHomeScreen}
      />

      <CSSTransition
        in={homeScreen}
        timeout={300}
        unmountOnExit
        classNames="home-screen-transition"
      >
        <Logo />
      </CSSTransition>
    </>
  );
}
