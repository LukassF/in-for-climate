import icon from '../data/icon.json'

export default function ForecastDay(props){
    let image = icon.filter(item => item.conditions === props.conditions)[0].icon

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