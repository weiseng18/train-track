import { lineColors } from '../constants/colors'
import { Line } from '../types/lines'
import { obtainLines } from '../utils/preprocessing'
import TrainLine from './TrainLine'

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
        return <TrainLine points={points} color={lineColors[line]} key={line} />
      })}
    </div>
  )
}

export default AllTrainLines
