import { useState } from "react"

export default function App(){
    const [city,setCity] = useState('')

    function search(){
        const APIkey = "2776200c72d03c5a7a95d9bbdffa5a9f"
        if(city.length > 0)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
                .then(res => res.json())
                .then(data => console.log(data.main.temp))
    }
    
    return(
        <>
            <input type="text" placeholder="Enter City name" onChange={(e) => setCity(e.target.value)}/>
            <button onClick={search}></button>
        </>
    )
}