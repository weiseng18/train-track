import { lineColors } from '../constants/colors'
import { obtainLines } from '../utils/preprocessing'
import TrainLine from './TrainLine'

const AllTrainLines = () => {
  const lineMap = obtainLines()

  return (
    <div>
      {Object.keys(lineMap)
        .filter((line) => lineMap[line].length > 0) // Filter out empty lines
        .map((line) => {
          const points = lineMap[line].map((c) => ({
            lat: c.lat,
            lng: c.lng,
          }))
          return (
            <TrainLine points={points} color={lineColors[line]} key={line} />
          )
        })}
    </div>
  )
}

export default AllTrainLines
