import GoogleMapComponent from "../components/MapWrapper";
import { Point } from "../types/points";
import TrainLine from "../components/TrainLine";
import { obtainLines } from "../utils/preprocessing";
import { Line } from "../types/lines";

const points: Point[] = obtainLines()[Line.Tozai].map((c) => ({
  lat: c.lat,
  lng: c.lng,
}));

const IndexPage = () => {
  const defaultZoom = 15
  const defaultCenter = points[3]

  return (
    <div>
      <GoogleMapComponent
        defaultZoom={defaultZoom}
        defaultCenter={defaultCenter}
      >
        <TrainLine points={points} color={'#009BBF'} />
      </GoogleMapComponent>
    </div>
  )
}

export default IndexPage
