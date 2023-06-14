import icon from "../data/icon.json";

export default function ForecastDay(props) {
  let image = icon.filter((item) => item.conditions === props.conditions)[0]
    .icon;
  //   document.documentElement.style.setProperty(
  //     `--box${props.index}-graph-skew`,
  //     `${props.parametersLine.deg}deg`
  //   );
  //   document.documentElement.style.setProperty(
  //     `--box${props.index}-bottom`,
  //     `${props.parametersLine.mean}px`
  //   );
  document.documentElement.style.setProperty(
    `--box${props.index}`,
    `${props.parametersBox}px`
  );

  return (
    <div className="day-box">
      <span id="day">{props.day}</span>
      <img src={image} width="20px" />

      <div className="graph">
        <span>{props.max} °C</span>
        <div className="line-container">
          <svg>
            <line
              x1="0"
              y1={props.parametersLine.y1}
              x2="100%"
              y2={props.parametersLine.y2}
            />
          </svg>
        </div>
        <span>{props.min} °C</span>
      </div>
    </div>
  );
}
