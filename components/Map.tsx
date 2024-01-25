import { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-map-clustering';

import { radiuses } from '../constants.styles';
import { generateLocationsNearAmsterdam } from '../utils/mockGeneration';

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from 'expo-location';
import { MapViewContainer } from './Map.styles';

import * as S from '../screens/Home.styles';

async function getLocation() {
  let { status } = await requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return;
  }

  let location = await getCurrentPositionAsync({});
  return location;
}

export default function Map() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      let currentLocation = await getLocation();
      if (currentLocation) setLocation(currentLocation);
    })();
  }, []);

  if (!location) return null;

  return (
    <MapViewContainer>
      <S.Text>Food nearby</S.Text>
      <ClusteredMapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={'Your Location'}
        />
        {generateLocationsNearAmsterdam().map((loc, idx) => (
          <Marker key={idx} coordinate={loc} />
        ))}
      </ClusteredMapView>
    </MapViewContainer>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    borderRadius: radiuses.small,
  },
});
