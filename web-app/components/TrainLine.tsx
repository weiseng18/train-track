import { Circle, Polyline } from '@react-google-maps/api'
import { Point } from '../types/points'
import { useLocalStorage } from 'usehooks-ts'
import {
  DATA_LOCAL_STORAGE_KEY,
  INITIAL_DATA,
  nextVisitStatus,
  visitStatusColors,
} from '../constants/data'

interface TrainLineProps {
  points: Point[]
  indices: number[]
  color: string
  paths: Point[][]
}

const TrainLine = ({ points, indices, color, paths }: TrainLineProps) => {
  const [data, setData] = useLocalStorage(DATA_LOCAL_STORAGE_KEY, INITIAL_DATA)

  const cycleVisitStatus = (index: number) => {
    const newData = [...data]
    newData[index] = nextVisitStatus[data[index]]
    setData(newData)
  }

  return (
    <>
      {points && points.length > 0 && (
        <>
          {points.map((point, index) => (
            <Circle
              key={index}
              center={point}
              radius={50}
              onClick={() => cycleVisitStatus(indices[index])}
              options={{
                fillColor: visitStatusColors[data[indices[index]]],
                fillOpacity: 1,
                strokeColor: 'black',
                strokeOpacity: 1,
                strokeWeight: 3,
              }}
            />
          ))}
        </>
      )}
      {paths && paths.length > 0 && (
        <>
          {paths.map((path, index) => (
            <Polyline
              key={index}
              path={path}
              options={{
                strokeColor: color,
                strokeOpacity: 1,
                strokeWeight: 5,
              }}
            />
          ))}
        </>
      )}
    </>
  )
}

export default TrainLine
