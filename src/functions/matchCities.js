import { APIkey } from "./searchFunc";
import iso from '../data/iso3166.json'

export default async function match({city, setList}){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`)
    const matchedCities = await response.json()
    
    const filteredCities = matchedCities.map(item => {
        let country = iso.filter(obj => obj.Code === item.country)
        return {name: item.name, country: country[0].Name, state:item.state}
    })

    setList(filteredCities)

    // let uniqueCities = []
    // filteredCities.forEach(item => {
    //     if(!uniqueCities.includes(item))
    //         uniqueCities.push(item)
    // })
    // console.log(uniqueCities)
}