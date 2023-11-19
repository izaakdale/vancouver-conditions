export interface SnowReport {
  data: ResortReport[]
}

export interface ResortReport {
	latitude: number
	longitude: number
  webcamurl: string
  forecasturl: string
  description: string
  resolvedAddress: string
  Days: Day[]
  CurrentConditions: CurrentConditions
  alerts: any[]
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
