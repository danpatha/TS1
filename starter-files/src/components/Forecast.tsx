import { forecastType } from '../types'

type Props ={
 data:forecastType
}

const Forecast = ({data}:Props): JSX.Element => {
    return (
        <div className="w-full md:max-w-[500px] py-4 md:py-4
        md:pz-10 lg:px-24 h-full lg:h-auto bg-white 
        bg-opacity-20 backdrop-blur-ls rounded drop-shadow-1g">
        <div className="mx-auto w-[300px]"></div>
           
        </div>
    )
}
export default Forecast