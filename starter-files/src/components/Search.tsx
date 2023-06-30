
import {ChangeEvent} from 'react'
import {optionType} from './../types'

type Props = {
  term:string,
  options: [],
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option:optionType) => void
  onSubmit: () => void
}

const Search = ({term, options, onInputChange,onOptionSelect, onSubmit}:Props): JSX.Element => {

 
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className= "w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-1s drop shadow-1g text-zinc-700">

<h1 className="text-4x1 font-thin"> Weather <span className="font-black">Forecast</span></h1>

<p className="text-sm mt-2"> Enter below a place you want to know the weather of and select an option from the dropdown</p>
     
     
<div className="relative mt-10 md:mt-4">
     <input type="text" value ={term} onChange={onInputChange} className="px- py-1 rounded-1-md border-2 border-white"/>
      
      <ul className="absolute top-9 bg-white m1-1 rounded-b-md">
    {options.map((option: optionType, index : number) =>  (
     <li key={option.name + '-' + index}>
      <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" 
         onClick={() => onOptionSelect(option)}>
          {option.name}
       </button>

     </li>
    ))}
    </ul>
    
      <button className="rounded-r-md border-2 border-zinc-100 hover:border-zince-500 hover:text-zinc-500 text-zince-100 px-2 py-1 cursor-pointer" onClick={onSubmit}> search</button>
 </div>
      </section>

    </main>
  )
}

export default Search
