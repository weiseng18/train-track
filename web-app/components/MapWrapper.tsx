import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Point } from "../types/points";

interface GoogleMapComponentProps {
  defaultZoom: number;
  defaultCenter: Point;
  children?: React.ReactNode;
}

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const GoogleMapComponent = ({
  defaultZoom,
  defaultCenter,
  children,
}: GoogleMapComponentProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // NOTE: It is necessary to expose the API key in the frontend in order to use the Google Maps API.
    // The API key used here is restricted to only allow requests from my website.
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={defaultZoom}
    >
      {children}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GoogleMapComponent;
