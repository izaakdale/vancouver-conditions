
import { ResortReport } from "../types/SnowReport";

export default function SkiResort(s: ResortReport) {
  return (
    <div className="bg-blue-900 bg-opacity-50 p-4 m-4 rounded shadow-lg">
      <div className="flex flex-col space-x-2">
        <h1 className="text-lg font-bold">{s.resolvedAddress}</h1>
      </div>
      
      <div className="py-1">
        <h2>{s.description}</h2>
      </div>

      <div className="py-1">
        <p className="font-semibold">Current Weather</p>
        <div className="flex space-x-6">
          <p className="font-bold">{s.CurrentConditions.temp}°C</p>
          <p> <span className="font-bold">{s.CurrentConditions.precipprob}%</span> chance of rain/snow</p>
          <p><span className="font-bold">{s.CurrentConditions.visibility}m</span> Visibility</p>
        </div>
      </div>

      <div className="py-1">
        <p className="font-semibold">Snow Fall</p>
        <div className="flex space-x-6">
          <p>{s.CurrentConditions.snowdepth}</p>
        </div>
      </div>
    </div>
  )
}
