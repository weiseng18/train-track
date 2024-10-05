import { Circle, Polyline } from '@react-google-maps/api'
import { Point } from '../types/points'

interface TrainLineProps {
  points: Point[]
  color: string
  paths: Point[][]
}

const TrainLine = ({ points, color, paths }: TrainLineProps) => {
  return (
    <>
      {points && points.length > 0 && (
        <>
          {points.map((point, index) => (
            <Circle
              key={index}
              center={point}
              radius={50}
              options={{
                fillColor: 'white',
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
