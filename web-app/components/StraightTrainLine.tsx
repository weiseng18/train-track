import { Point } from '../types/points'
import TrainLine from './TrainLine'

interface StraightTrainLineProps {
  points: Point[]
  indices: number[]
  color: string
}

const StraightTrainLine = ({
  points,
  indices,
  color,
}: StraightTrainLineProps) => {
  const paths = [points]
  return (
    <TrainLine points={points} indices={indices} color={color} paths={paths} />
  )
}

export default StraightTrainLine
