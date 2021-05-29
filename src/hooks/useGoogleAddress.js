import { useState, useEffect } from 'react';
import axios from 'axios';
import pass from '../pass';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const googleApiKey = pass.googleMapsAPI;
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data.results[0].geometry.location);
    console.log(response.data.results[0]);
  }, []);
  return map;
};

export default useGoogleAddress;
