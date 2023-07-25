import { useState, ChangeEvent} from "react"
import{optionType} from './types';
import Search from './components/Search'

const App = (): JSX.Element => {
const [term, setTerm] = useState<string>('')
const [options,setOptions] = useState<[]>([])
const [forecast,setForecast] = useState<null>(null)


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
    setTerm(value)

  //This makes sure they people can't type in a space to start.
  if (value ==='') return

    getSearchOptions(value)
  }

  const onOptionSelect = (option: optionType) => {
    console.log(option.name)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&units=standard&appid=${process.env.REACT_APP_API_KEY}`
  )
  .then((res) => res.json())
  .then(data=> setForecast(data))
  
}
 
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">

     {forecast ? (
      'we have a forecast'
     ): (
    
      //       <Search term={""} options={[]} onInputChange={function (e: ChangeEvent<HTMLInputElement>): void {
      //   throw new Error("Function not implemented.");
      // } } onOptionSelect={function (option: optionType): void {
      //   throw new Error("Function not implemented.");
      // } } onSubmit={function (): void {
      //   throw new Error("Function not implemented.");
      // } }/> 

      <Search term={term} options={options} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={function (): void {
            throw new Error("Function not implemented.");
          } } />
)}
    </main>
  )
}

export default App
