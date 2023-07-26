import { forecastType } from '../types'

type Props ={
 data:forecastType
}



const Forecast = ({data}: Props): JSX.Element => {
    const today = data.list[0]


    return (
        <div className="w-full md:max-w-[500px] py-4 md:py-4
        md:pz-10 lg:px-24 h-full lg:h-auto bg-white 
        bg-opacity-20 backdrop-blur-ls rounded drop-shadow-1g">
        <div className="mx-auto w-[300px]">
           <section className="text-center">
           <h2 className='text-2x1 font-black'>{data.name}
           <span className="font-thin">, {data.country}</span>
           </h2>
           <h1 className="text-4x-1 font-extrabold">{Math.round(today.main.temp)}
           </h1>
           </section>
           </div>
        </div>

    )
    //Start at 1:20 after.
}
export default Forecast