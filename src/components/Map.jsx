import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pass from '../pass';

const Map = ({ data }) => {
  const googleMapsApiKey = pass.googleMapsAPI;

  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

// const Map = (props: Props) => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: '---',
//   });
//   const mapStyles = {
//     height: '50vh',
//     with: '100%',
//   };
//   const defaultCenter = {
//     lat: 19.4268,
//     lng: -99.17,
//   };
//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);
//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);
//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={mapStyles}
//       center={defaultCenter}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//       <></>
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// };
