import { useState,ChangeEvent } from "react"
import { displayPartsToString } from "typescript"
import { optionType, forecastType } from "../types"

const useForecast = () => {

const [term, setTerm] = useState<string>('')
const [options,setOptions] = useState<[]>([])
const [forecast,setForecast] = useState<forecastType | null>(null)


const getSearchOptions = (value: string) => {


//This is the actually fetch to the API
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${process.env.REACT_APP_API_KEY
}`
)
//This shows us the location that come up as data.
.then ((res) => res.json())
.then((data) => setOptions(data))
}
  const onInputChange =(e: ChangeEvent<HTMLInputElement>) => {
  const value  = e.target.value.trim()
    setTerm(e.target.value)

  //This makes sure they people can't type in a space to start.
  if (value ==='') return

    getSearchOptions(value)
  }

  const onOptionSelect = (option: optionType) => {
    console.log(option.name)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${option.lat}&lon=${option.lon}&units=imperial&lang=en&appid=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) => res.json())
  .then(data=> {

const forecastData = {
    ...data.city,
    list:data.list.slice(0,16),
}
setForecast(forecastData)
})
  
}

return {
term,options,forecast, onInputChange, onOptionSelect   
}
}

export default useForecast