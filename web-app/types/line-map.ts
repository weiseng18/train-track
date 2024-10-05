import { Line } from './lines'

export interface TrainStationInfo {
  lat: number
  lng: number
  name: string
  code: string

  // Index in the constants array
  index: number
}

export type LineMap = { [key in Line]: TrainStationInfo[] }
