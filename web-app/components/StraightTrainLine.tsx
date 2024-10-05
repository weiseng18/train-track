import { Point } from '../types/points'
import TrainLine from './TrainLine'

interface StraightTrainLineProps {
  points: Point[]
  color: string
}

const StraightTrainLine = ({ points, color }: StraightTrainLineProps) => {
  const paths = [points]
  return <TrainLine points={points} color={color} paths={paths} />
}

export default StraightTrainLine
