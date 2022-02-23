import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

// TODO: permission hook

export default function useLocation() {
  const [granted, setGranted] = useState(null);
  const [currentLocation, setCurrentLocation] = useState();

  useEffect(() => {
    async function onCreate() {
      const permissionResponse =
        await Location.requestForegroundPermissionsAsync();
      setGranted(permissionResponse.granted);

      if (permissionResponse.granted) {
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location);
      }
    }
    onCreate();
  }, []);

  return {
    granted,
    currentLocation,
  };
}
