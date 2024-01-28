import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Animated, StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT, Marker, Polyline } from 'react-native-maps';
import simplify from 'simplify-js';
import haversine from 'haversine';
import ConfettiCannon from 'react-native-confetti-cannon';
import { FIREBASE_DB, FIREBASE_AUTH } from '../FirebaseConfig';
import { ref, get, update } from 'firebase/database';
import customMarker from '../assets/star.png';

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

const Mapping = ({ followingState }) => {
  const mapRef = React.useRef(null);
  const [coordinates, setCoordinates] = React.useState([]);
  const [bonusMarkers] = React.useState([
    { id: 1, name: 'Bonus Challenge - CDS', latitude: 33.644644, longitude: -117.824751 },
    { id: 2, name: 'Bonus Challenge - Student Center', latitude: 33.649585531243375, longitude: -117.84250114971816 },
    { id: 3, name: 'Bonus Challenge - Bren Events Center', latitude: 33.649975727373466, longitude: -117.84683739849685},
    { id: 4, name: 'Bonus Challenge - UCI Ecological Preserve', latitude: 33.64016244843607, longitude: -117.84624012127836}
  ]);

  const [bonusClaimed, setBonusClaimed] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const translateY = new Animated.Value(0);

  useEffect(() => {
    if (bonusClaimed && translateY._value !== 1) { // Check if bonusClaimed is true and translateY is not already 1
      Animated.timing(translateY, {
        toValue: 1, 
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [bonusClaimed, translateY]);

  const handleLocationChange = (event) => {
    const newCoordinate = event.nativeEvent.coordinate;

    setTimeout(() => {
      const newPath = addCoordinateIfFarEnough(newCoordinate, coordinates, 0.00001);

      const simplifiedCoordinates = simplify(newPath, 0.001, true);
      setCoordinates(newPath);
    }, 500);

    handleBonusSteps(newCoordinate, bonusMarkers);
  };

  const handleBonusSteps = async (newCoordinate, bonusMarkers) => {
    for (const marker of bonusMarkers) {
      const markerCoordinate = {
        latitude: marker.latitude,
        longitude: marker.longitude,
      };
      const distance = calculateDistanceFromMarker(newCoordinate, markerCoordinate);
  
      if (distance <= 0.001 && !bonusClaimed) {
        try {
          const user = FIREBASE_AUTH.currentUser;
  
          if (user) {
            const userRef = ref(FIREBASE_DB, `dailySteps/${user.uid}`);
            const userSnapshot = await get(userRef);
  
            if (userSnapshot.exists()) {
              const currentBonusSteps = userSnapshot.val().bonusSteps || 0;
  
              // Increment the bonusSteps count
              const bonusStepsIncrement = 1000;
              const newBonusSteps = currentBonusSteps + bonusStepsIncrement;
  
              // Update the bonusSteps in the database
              await update(userRef, {
                bonusSteps: newBonusSteps,
              });
  
              console.log(`Bonus steps updated in the database.`);
              setBonusClaimed(true);
              setModalVisible(true);
            } else {
              console.error(`User data not found.`);
            }
          } else {
            console.error(`User not authenticated.`);
          }
        } catch (error) {
          console.error(`Error updating bonus steps:`, error);
        }
      }
    }
  };

  const handleClaimButtonPress = () => {
    setModalVisible(false);
    // setBonusClaimed(false);
    translateY.setValue(0);
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
            description={`1000 Bonus steps available here!`}
            image={customMarker}
          />
        ))}
      </MapView>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <ConfettiCannon
            count={200}
            origin={{ x: 0, y: 0 }}
            explosionSpeed={2000}
            fallSpeed={2000}
            autoStart
          />

          <Animated.View
            style={[
              styles.modalContent,
              {
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [0, 1],
                      outputRange: [500, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={styles.modalText}>Congratulations! You earned 1000 bonus steps!</Text>
            <TouchableOpacity style={styles.claimButton} onPress={handleClaimButtonPress}>
              <Text style={styles.claimButtonText}>Claim Bonus</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View> 
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  claimButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  claimButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Mapping;
