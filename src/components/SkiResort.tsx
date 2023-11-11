
import { FullSnowReport } from "../types/SnowReport";

export default function SkiResort(s: FullSnowReport) {

  return (
    <div className="w-full bg-blue-900 bg-opacity-50 px-2 py-3 rounded shadow-lg">
      <div className="flex space-x-2">
        <h1 className="text-lg font-bold">{s.name}</h1>
      </div>
      
      <p className="font-semibold">Current Weather</p>
      <div className="flex space-x-6">
        <p>{s.current_temp_c}°C</p>
        <p>{s.precipitation_status}</p>
      </div>

      <p className="font-semibold">Snow Fall</p>
      <div className="flex space-x-6">
        <p>Next 24 Hours: {s.snow_fall_1_day.toFixed(1)}cm</p>
        <p>Next 3 days: {s.snow_fall_3_days.toFixed(1)}cm</p>
        <p>Next 7 days: {s.snow_fall_5_days.toFixed(1)}cm</p>
      </div>
    </div>
  )
}
