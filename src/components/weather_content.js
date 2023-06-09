import iconArray from "../data/icon.json";
import iso from "../data/iso3166.json";
import degreeToDirection from "../functions/degree_to_direction";

export default function WeatherContent({ currentWeather, city }) {
  const icon = iconArray.filter(
    (item) =>
      item.conditions === currentWeather.main &&
      item.is_day === currentWeather.is_day
  )[0];
  const cityName = city.split(",")[0];
  const country = iso.filter((item) => item.Code === currentWeather.country)[0]
    .Name;
  return (
    <section id="weather-content-section">
      <div id="icon">
        <img src={icon.icon} width="180px"></img>
      </div>
      <div id="temp">
        <span id="main-temp">{Math.round(currentWeather.temp)} °C</span>
        <div>
          <span>
            <p>{Math.round(currentWeather.max)} °C</p>
          </span>
          <span>
            <p>{Math.round(currentWeather.min)} °C</p>
          </span>
        </div>
      </div>
      <div id="location">
        <span>
          <i className="fa fa-location-dot" /> {cityName}
        </span>
        <span>{country}</span>
      </div>
      <div id="other-parameters">
        <ul>
          <li>
            <span>
              <i className="fa fa-droplet" /> Humidity
            </span>
            <span>{currentWeather.humidity} %</span>
          </li>
          <li>
            <span>
              <i className="fa fa-weight" /> Pressure
            </span>
            <span>{currentWeather.pressure} hPa</span>
          </li>
          <li>
            <span>
              <i className="fa fa-wind" /> Windspeed
            </span>
            <span>{currentWeather.speed} m/s</span>
          </li>
          <li>
            <span>
              <i className="fa fa-compass" /> Direction
            </span>
            <span>{degreeToDirection(currentWeather.deg)}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
