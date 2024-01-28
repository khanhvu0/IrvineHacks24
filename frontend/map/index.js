import React, { useRef, useState, useEffect } from 'react';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native';
import simplify from 'simplify-js';

//import { useNavigation } from 'expo-router';

const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: 100.4444,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

const addCoordinateIfFarEnough = (newCoordinate, path, minDistanceThreshold) => {
  if (path.length === 0) {
    // First coordinate, always add
    return [...path, newCoordinate];
  }
  const lastCoordinate = path[path.length - 1];
  const latDiff = Math.abs(newCoordinate.latitude - lastCoordinate.latitude);
  const lonDiff = Math.abs(newCoordinate.longitude - lastCoordinate.longitude);

  if (latDiff >= minDistanceThreshold || lonDiff >= minDistanceThreshold) {
    return [...path, newCoordinate];
  } else {
    // Coordinates are too close, skip adding
    return path;
  }
};


export default function Mapping({followingState}) {
  const mapRef = useRef(null);
  const minDistanceThreshold = 0.00001;
  
  // const onRegionChange = (region) => {
	// 	console.log(region);
	// };

  const [coordinates, setCoordinates] = useState([]);
  const simplifiedCoordinatesRef = useRef([]);

  useEffect(() => {
    // Update the simplified coordinates whenever the coordinates change
    simplifiedCoordinatesRef.current = simplify(coordinates, 0.1, true);
  }, [coordinates]);

  const handleLocationChange = (event) => {
    const newCoordinate = event.nativeEvent.coordinate;
    setTimeout(() => {
      const newPath = addCoordinateIfFarEnough(newCoordinate, coordinates, minDistanceThreshold);
      setCoordinates(newPath);
    }, 5000);
    //console.log(coordinates);
  };


  return (
    <View style={{flex: 1}}>
      <MapView style={StyleSheet.absoluteFill}
      provider={PROVIDER_DEFAULT}
      region={INITIAL_REGION}
      showsUserLocation
      showsMyLocationButton

      //set true with useState
      followsUserLocation={followingState}
      //mapType='satellite'
      loadingEnabled
      ref={mapRef}
      onUserLocationChange={(event) => {
        handleLocationChange(event);
      }}

      //onRegionChangeComplete={onRegionChange}
      //onUserLocationChange={event => console.log(event.nativeEvent)}
      // onRegionChange={(e, isGesture) => {
      //     // mapRef.current?.animateCamera({
      //     //   center: {
      //     //     latitude: e.nativeEvent.coordinate.latitude,
      //     //     longitude: e.nativeEvent.coordinate.longitude,
      //     //   },
      //     //   pitch: 0,
      //     //   heading: e.nativeEvent.coordinate.heading,
      //     //   altitude: 1400,
      //     //   zoom: 19,
      //     // })
      //     if(isGesture){
      //       console.log("I did not MOVE");
      //     }
      //     if(!isGesture){
      //       console.log("I MOVED");
      //       mapRef.current?.animateToRegion({
      //         latitude: e.nativeEvent.coordinate.latitude,
      //         longitude: e.nativeEvent.coordinate.longitude,
      //         latitudeDelta: 0.00001,
      //         longitudeDelta: 0.00001
      //       })
      //     }
      //     //setMyLocation(e.nativeEvent.coordinate)
      // }}
      >
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // Line color
          strokeWidth={5}
      />
    </MapView>

    </View>
  );
}


