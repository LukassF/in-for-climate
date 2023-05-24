import iso from '../data/iso3166.json'

export default function pick({name, country, setCity, citySearchRef, setPicked}){
    let code = iso.filter(obj => obj.Name === country)
    setCity(`${name}, ${code[0].Code}`)
    if(citySearchRef.current) citySearchRef.current.value = `${name}, ${code[0].Code}`
    setPicked(true)
    document.documentElement.style.setProperty('--dropdown-opacity', 0)

}