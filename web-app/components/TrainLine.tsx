import { Circle, Polyline } from '@react-google-maps/api'
import { Point } from '../types/points'

interface TrainLineProps {
  points: Point[]
  color: string
}

const TrainLine = ({ points, color }: TrainLineProps) => {
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
          <Polyline
            path={points}
            options={{
              strokeColor: color,
              strokeOpacity: 1,
              strokeWeight: 5,
            }}
          />
        </>
      )}
    </>
  )
}

export default TrainLine
