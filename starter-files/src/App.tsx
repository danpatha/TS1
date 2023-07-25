
import Search from './components/Search'
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
  const {
    term,options,forecast, onInputChange, onOptionSelect   
    } = useForecast()

 
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">

     {forecast ? (
      forecast.sunrise
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
