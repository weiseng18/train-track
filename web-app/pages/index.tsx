import GoogleMapComponent from '../components/MapWrapper'
import { Point } from '../types/points'
import TrainLine from '../components/TrainLine'

const points: Point[] = [
  { lat: 35.706111, lng: 139.665556 }, // T01: Nakano
  { lat: 35.710742, lng: 139.686339 }, // T02: Ochiai
  { lat: 35.712778, lng: 139.703889 }, // T03: Takadanobaba
  { lat: 35.705714, lng: 139.722139 }, // T04: Waseda
  { lat: 35.7039, lng: 139.734236 }, // T05: Kagurazaka
  { lat: 35.701944, lng: 139.745 }, // T06: Iidabashi
  { lat: 35.6954, lng: 139.7514 }, // T07: Kudanshita
  { lat: 35.690707, lng: 139.756823 }, // T08: Takebashi
  { lat: 35.684699, lng: 139.765964 }, // T09: Otemachi
  { lat: 35.6822, lng: 139.774578 }, // T10: Nihombashi
  { lat: 35.679941, lng: 139.7810158 }, // T11: Kayabacho
  { lat: 35.671979, lng: 139.79579 }, // T12: Monzen-Nakacho
  { lat: 35.669391, lng: 139.806521 }, // T13: Kiba
  { lat: 35.669626, lng: 139.817596 }, // T14: Toyocho
  { lat: 35.668824, lng: 139.83068 }, // T15: Minami-Sunamachi
  { lat: 35.664525, lng: 139.859366 }, // T16: Nishi-Kasai
  { lat: 35.663618, lng: 139.872486 }, // T17: Kasai
  { lat: 35.665784, lng: 139.892899 }, // T18: Urayasu
  { lat: 35.672714, lng: 139.902271 }, // T19: Minami-Gyotoku
  { lat: 35.682597, lng: 139.914174 }, // T20: Gyotoku
  { lat: 35.691592, lng: 139.925008 }, // T21: Myoden
  { lat: 35.703202, lng: 139.941879 }, // T22: Baraki-Nakayama
  { lat: 35.707, lng: 139.959 }, // T23: Nishi-Funabashi
]

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
