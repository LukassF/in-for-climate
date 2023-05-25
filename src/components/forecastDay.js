import icon from '../data/icon.json'

export default function ForecastDay(props){
    let image = icon.filter(item => item.conditions === props.conditions)[0].icon
    document.documentElement.style.setProperty(`--box${props.index}-graph-skew`,`${props.parametersLine.deg}deg`)
    document.documentElement.style.setProperty(`--box${props.index}-bottom`,`${props.parametersLine.mean}px`)
    document.documentElement.style.setProperty(`--box${props.index}-graph-point`,`${props.parametersBox}px`)

    return(
        <div className="day-box">
            <span id="day">{props.day}</span>
            <img src={image} width="20px"/>

            <div className='graph'>
                <span>{props.max} °C</span>
                <span>{props.min} °C</span>
            </div>
        </div>
    )
}