import { APIkey } from "./searchFunc"
import iso from '../data/iso3166.json'

export default async function match({city, setList}){

    //Calling Geocoding API to find a list of cities matching current input value
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`)
    const matchedCities = await response.json()
    
    //filtering the array from unneccessary info
    const filteredCities = matchedCities.map(item => {
        let country = iso.filter(obj => obj.Code === item.country)
        if(country.length > 0)
            return {name: item.name, country: country[0].Name.split(',')[0], state:item.state}
    })

    //Evaluation function
    const isEqual = (item,t) => t.name === item.name && t.country === item.country && t.state === item.state

    //Removing duplicates
    let unique = filteredCities.filter((item, index) => {
        return filteredCities.findIndex(t => isEqual(item,t)) === index
    })
    
    setList(unique)
}