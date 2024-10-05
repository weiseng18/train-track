import { lineColors } from '../constants/colors'
import { TrainStationInfo } from '../types/line-map'
import { Line } from '../types/lines'
import { obtainLines } from '../utils/preprocessing'
import StraightTrainLine from './StraightTrainLine'
import TrainLine from './TrainLine'

const MarunouchiLine = ({ info }: { info: TrainStationInfo[] }) => {
  const points = info.map((c) => ({
    lat: c.lat,
    lng: c.lng,
  }))
  const indices = info.map((c) => c.index)

  // Currently hardcoded based on the index of the stations in the constants file
  // TODO: Find a better way to do this
  const paths = [[...points.slice(0, 25)], [...points.slice(25, 28), points[5]]]

  return (
    <TrainLine
      points={points}
      indices={indices}
      color={lineColors[Line.Marunouchi]}
      paths={paths}
    />
  )
}

const AllTrainLines = () => {
  const lineMap = obtainLines()

  // These train lines are a straight line
  const standardTrainLines = [
    Line.Ginza,
    Line.Hibiya,
    Line.Tozai,
    Line.Chiyoda,
    Line.Yurakucho,
    Line.Hanzomon,
    Line.Namboku,
    Line.Fukutoshin,
  ]

  return (
    <div>
      {standardTrainLines.map((line) => {
        const points = lineMap[line].map((c) => ({
          lat: c.lat,
          lng: c.lng,
        }))
        const indices = lineMap[line].map((c) => c.index)
        return (
          <StraightTrainLine
            points={points}
            indices={indices}
            color={lineColors[line]}
            key={line}
          />
        )
      })}
      {/* These train lines are not a straight line */}
      <MarunouchiLine info={lineMap[Line.Marunouchi]} />
    </div>
  )
}

export default AllTrainLines
