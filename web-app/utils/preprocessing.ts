import { tokyoMetroStations } from '../constants/stations'
import { Line } from '../types/lines'
import { LineMap, TrainStationInfo } from '../types/line-map'

export function obtainLines(): LineMap {
  // Setup the lineMap
  const lines = Object.keys(Line).filter((k) => !isNaN(Number(k)))
  const lineMap: LineMap = Object.assign(
    {},
    ...lines.map((line) => ({ [line]: [] }))
  )

  // Populate
  tokyoMetroStations.forEach((station, index) => {
    if (station.codes && station.codes.length > 0) {
      station.codes.forEach((c) => {
        const { code, line } = c
        const trainStationInfo: TrainStationInfo = {
          lat: station.lat,
          lng: station.lng,
          name: station.name,
          code,
          index,
        }
        lineMap[line].push(trainStationInfo)
      })
    }
  })

  // Sort by code
  lines.forEach((line) => {
    lineMap[line] = lineMap[line].sort((a, b) => {
      return a.code < b.code ? -1 : 1
    })
  })

  return lineMap
}
