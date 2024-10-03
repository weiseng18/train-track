export interface StationLineAndCode {
  line: Line
  code: string
}

// Raw data in constants/tokyo-metro.ts
export interface TrainStation {
  lat: number
  lng: number
  name: string
  codes?: StationLineAndCode[]
}

export enum Line {
  Ginza,
  Marunouchi,
  Hibiya,
  Tozai,
  Chiyoda,
  Yurakucho,
  Fukutoshin,
  Hanzomon,
  Namboku,
}
