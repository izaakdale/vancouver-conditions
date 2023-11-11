export interface FullSnowReport {
  id: number
  name: string
  country: string
  continent: string
  current_temp_c: number
  snow_fall_1_day: number
  snow_fall_3_days: number
  snow_fall_5_days: number
  precipitation_status: string
}


export interface Forecast {
  date: string
  time: string
  precip_mm: number
  precip_in: number
  rain_mm: number
  rain_in: number
  snow_mm: number
  snow_in: number
  base: Base
  mid: Mid
  upper: Upper
}

export interface Base {
  freshsnow_cm: number
  freshsnow_in: number
  temp_c: number
  temp_f: number
  feelslike_c: number
  feelslike_f: number
}

export interface Mid {
  freshsnow_cm: number
  freshsnow_in: number
  temp_c: number
  temp_f: number
  feelslike_c: number
  feelslike_f: number
}

export interface Upper {
  freshsnow_cm: number
  freshsnow_in: number
  temp_c: number
  temp_f: number
  feelslike_c: number
  feelslike_f: number
}
