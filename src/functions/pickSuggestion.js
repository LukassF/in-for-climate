import iso from '../data/iso3166.json'

export default function pick({name, country, setCity, citySearchRef}){
    let code = iso.filter(obj => obj.Name === country)
    setCity(`${name}, ${code[0].Code}`)
    if(citySearchRef.current) citySearchRef.current.value = `${name}, ${code[0].Code}`
    // console.log(`${name}, ${code[0].Code}`)
}