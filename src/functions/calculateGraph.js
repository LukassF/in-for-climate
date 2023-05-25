export default function calculateGraph({max,min}){
    const averageTemps = []

    max.forEach((item,index) => {
        averageTemps.push((item+min[index])/2)
    })
    const maxValue = Math.max(...averageTemps)
    const minValue = Math.min(...averageTemps)

    const range = maxValue - minValue
    const coefficient = 25/range

    const differences = []
    averageTemps.forEach((item,index) => {
        if(index >= 4){
            differences.push({deg:0, mean:0})
            return
        }
        const deg = coefficient * Math.atan((item - averageTemps[index+1]),107)
        differences.push(
            {
                deg: deg,
                mean: ((item + averageTemps[index+1])/2 - minValue) * coefficient + 22.5,
            }
        )
    })
    averageTemps.forEach((item,index) => averageTemps[index] = (item-minValue)*coefficient + 20.5)

    

    return {diff: differences, average: averageTemps}
}