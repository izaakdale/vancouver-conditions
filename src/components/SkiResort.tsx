
import { ResortReport } from "../types/SnowReport";
import { GoAlert } from "react-icons/go";
import "./Hover.css"

export default function SkiResort(s: ResortReport) {
  return (
    <div className="bg-blue-950 p-4 m-4 rounded shadow-lg h-[90%] flex flex-col justify-between">

      {/* fixed top right */}
      {/* { s.alerts.length > 0 && 
      <div className="relative flex items-center top-4">
        <div className="absolute right-0 iconToHover">
          <GoAlert className="text-3xl text-yellow-300"/>
        </div> 
        <div className="absolute right-10 mt-2 hiddenUntilHover bg-black bg-opacity-90 p-2 rounded">
          <p className="">{s.alerts[0].headline}</p>
        </div>
      </div>
      } */}
      
      {/* top */}
      <div className="">
        <div className="flex justify-between">

          <h1 className="text-lg font-bold">{s.title}</h1>
          { s.alerts.length > 0 && 
          <div className="flex items-center relative">
            <div className="right-0 iconToHover">
              <GoAlert className="text-3xl text-amber-300"/>
            </div> 
            <div className="absolute w-[1000%] right-10 hiddenUntilHover bg-black bg-opacity-90 p-2 rounded border-[1px] border-amber-200">
              <p className="">{s.alerts[0].headline}</p>
            </div>
          </div>
          }
        </div>

      
        <div className="py-1">
          <a href={s.googlemapsurl} target="_blank" className="underline">{s.resolvedAddress}</a>
        </div>

        <div className="py-1">
          <h3>{s.description}</h3>
        </div>

        <div className="py-1">
          <p className="font-semibold">Current Weather</p>
          <div className="flex space-x-6">
            <p className="font-bold">{s.CurrentConditions.temp}°C</p>
            <p><span className="font-bold">{s.CurrentConditions.precipprob}%</span> Precip</p>
            <p><span className="font-bold">{s.CurrentConditions.visibility}m</span> Visibility</p>
            <p>Base <span className="font-bold">{s.CurrentConditions.snowdepth}cm</span></p>
          </div>
        </div>

        <div className="py-1">
          <div className="flex space-x-6 items-center">
            <p className="font-semibold">Snowfall</p>
            <div className="flex space-x-5">
              <div>
                <p>24 hours: <span className="font-bold">{s.snowfall.next_1_days}cm</span></p>
              </div>
              <div>
                <p>3 days: <span className="font-bold">{s.snowfall.next_3_days}cm</span></p>
              </div>
              <div>
                <p>7 days: <span className="font-bold">{s.snowfall.next_7_days}cm</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="mt-4">
        <div className="flex justify-center space-x-6">
          <a className="border-2 rounded p-2 hover:shadow-lg hover:bg-gray-950" target="_blank" href={s.forecasturl}>Forecast</a>
          <a className="border-2 rounded p-2 hover:shadow-lg hover:bg-gray-950" target="_blank" href={s.webcamurl}>Webcams</a>
        </div>
      </div>

    </div>
  )
}
