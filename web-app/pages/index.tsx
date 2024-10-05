import GoogleMapComponent from '../components/MapWrapper'
import { tokyoMetroStations } from '../constants/stations'
import AllTrainLines from '../components/AllTrainLines'

const IndexPage = () => {
  const defaultZoom = 15
  const defaultCenter = tokyoMetroStations.filter((s) => s.name === 'Waseda')[0]

  return (
    <div>
      <GoogleMapComponent
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
      >
        <AllTrainLines />
      </GoogleMapComponent>
    </div>
  )
}

export default IndexPage
