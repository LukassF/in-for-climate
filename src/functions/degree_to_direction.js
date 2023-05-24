export default function degreeToDirection(deg){
    if(deg>= 0 && deg<=30) return 'N'
    else if(deg>30 && deg<=60) return 'NE'
    else if(deg>60 && deg<=120) return 'E'
    else if(deg>120 && deg<=150) return 'SE'
    else if(deg> 150 && deg<=210) return 'S'
    else if(deg>210 && deg<=240) return 'SW'
    else if(deg>240 && deg<=300) return 'W'
    else if(deg>300 && deg<=330) return 'NW'
    else if(deg>330 && deg<=360) return 'N'
}