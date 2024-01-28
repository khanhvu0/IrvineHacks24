import React, { useRef, useState, useEffect } from 'react';
import MapView, { PROVIDER_DEFAULT, Marker, Polyline } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native';
import simplify from 'simplify-js';
import haversine from 'haversine';
import { FIREBASE_DB, FIREBASE_AUTH } from '../FirebaseConfig';
import { ref, get, update } from 'firebase/database';

const INITIAL_REGION = {
  latitude: 33.644644,
  longitude: -117.824741,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const addCoordinateIfFarEnough = (newCoordinate, path, minDistanceThreshold) => {
  if (path.length === 0) {
    return [...path, newCoordinate];
  }

  const lastCoordinate = path[path.length - 1];
  const latDiff = Math.abs(newCoordinate.latitude - lastCoordinate.latitude);
  const lonDiff = Math.abs(newCoordinate.longitude - lastCoordinate.longitude);

  if (latDiff >= minDistanceThreshold || lonDiff >= minDistanceThreshold) {
    return [...path, newCoordinate];
  } else {
    return path;
  }
};

const calculateDistanceFromStart = (coordinates) => {
  if (coordinates.length < 2) {
    return 0;
  }

  const startCoordinate = coordinates[coordinates.length - 2];
  const endCoordinate = coordinates[coordinates.length - 1];
  const distance = haversine(startCoordinate, endCoordinate);
  return distance;
};

const calculateDistanceFromMarker = (coord1, coord2) => {
  const latDiff = Math.abs(coord1.latitude - coord2.latitude);
  const lonDiff = Math.abs(coord1.longitude - coord2.longitude);
  return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
};

const handleBonusSteps = async (newCoordinate, bonusMarkers) => {
  console.log(`Bonus steps1`);
  for (const marker of bonusMarkers) {
    const markerCoordinate = {
      latitude: marker.latitude,
      longitude: marker.longitude,
    };
    const distance = calculateDistanceFromMarker(newCoordinate, markerCoordinate);

    if (distance <= 0.001) { // bonusRadius (you can adjust this value)
      try {
        console.log(`Bonus steps`);
        const user = FIREBASE_AUTH.currentUser;
        const userRef = ref(FIREBASE_DB, `dailySteps/` + user.uid);
        const userSnapshot = await get(userRef);
        const currentBonusSteps = userSnapshot.val().bonusSteps || 0;

        const bonusStepsIncrement = 1000;
        const newBonusSteps = currentBonusSteps + bonusStepsIncrement;

        await update(userRef, {
          bonusSteps: newBonusSteps,
        });

        console.log(`Bonus steps updated in the database.`);
      } catch (error) {
        console.error(`Error updating bonus steps:`, error);
      }
    }
  }
};

const Mapping = ({ followingState }) => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);
  const [bonusMarkers] = useState([
    { id: 1, name: 'Bonus Challenge 1', latitude: 33.644644, longitude: -117.824741 },
    { id: 2, name: 'Bonus Challenge 2', latitude: 33.645644, longitude: -117.825741 },
  ]);

  const [bonusClaimed, setBonusClaimed] = useState(false);

  const handleLocationChange = (event) => {
    const newCoordinate = event.nativeEvent.coordinate;
    // Check if bonus steps have already been claimed
    if (!bonusClaimed) {
      setTimeout(() => {
        const newPath = addCoordinateIfFarEnough(newCoordinate, coordinates, 0.00001);

        // Call the async function to handle bonus steps only if not claimed
        handleBonusSteps(newCoordinate, bonusMarkers);

        const simplifiedCoordinates = simplify(newPath, 0.0001, true);
        setCoordinates(simplifiedCoordinates);
      }, 2000);

      // Mark bonus steps as claimed
      setBonusClaimed(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_DEFAULT}
        region={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
        followsUserLocation={followingState}
        loadingEnabled
        ref={mapRef}
        onUserLocationChange={handleLocationChange}
      >
        <Polyline
          coordinates={coordinates}
          strokeColor="#000"
          strokeWidth={5}
        />

        {bonusMarkers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.name}
            description={`Bonus steps available here!`}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Mapping;


