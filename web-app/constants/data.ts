import { VisitStatus } from '../types/data'
import { tokyoMetroStations } from './stations'

// Default data for the user
export const INITIAL_DATA = Array.from(
  { length: tokyoMetroStations.length },
  () => VisitStatus.NotVisited
)

export const DATA_LOCAL_STORAGE_KEY = 'data'

// Color of visit status
export const visitStatusColors = {
  [VisitStatus.NotVisited]: '#FFFFFF',
  [VisitStatus.PassedThrough]: '#FFFF00',
  [VisitStatus.Visited]: '#00FF00',
}

// Cycle through the visit status
export const nextVisitStatus = {
  [VisitStatus.NotVisited]: VisitStatus.PassedThrough,
  [VisitStatus.PassedThrough]: VisitStatus.Visited,
  [VisitStatus.Visited]: VisitStatus.NotVisited,
}
