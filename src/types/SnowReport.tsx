export interface SnowReport {
  data: ResortReport[]
}

export interface ResortReport {
	latitude: number
	longitude: number
  webcamurl: string
  forecasturl: string
  googlemapsurl: string
  title: string
  description: string
  resolvedAddress: string
  Days: Day[]
  CurrentConditions: CurrentConditions
  alerts: Alert[]
}

export interface Alert {
  description: string
  ends: string
  endsEpoch: number
  event: string
  headline: string
  id: string
  language: string
  link: string
  onset: string
  onsetEpoch: number
}


export interface Day {
  datetime: string
  precip: number
  precipprob: number
  precipcover: number
  preciptype?: string[]
  snow: number
  snowdepth: number
}

export interface CurrentConditions {
  temp: number
  feelslike: number
  precip?: number
  precipprob: number
  snow: number
  snowdepth: number
  preciptype: any
  visibility: number
  conditions: string
  icon: string
}
