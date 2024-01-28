import React, { useRef, useState, useEffect } from 'react';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native';

//import { useNavigation } from 'expo-router';

const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: 100.4444,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

export default function Mapping({followingState}) {
  const mapRef = useRef(null);
  //const navigation = useNavigation();
  
  
  // useEffect(() => {
	// 	navigation.setOptions({
	// 		headerRight: () => (
	// 			<TouchableOpacity onPress={focusMap}>
	// 				<View style={{ padding: 10 }}>
	// 					<Text>Focus</Text>
	// 				</View>
	// 			</TouchableOpacity>
	// 		)
	// 	});
	// }, []);


  // const focusMap = () => {		
  //   const GreenBayStadium = {
  //     latitude: 44.5013,
  //     longitude: -88.0622,
  //     latitudeDelta: 0.1,
  //     longitudeDelta: 0.1
  //   };
  // };



  const onRegionChange = (region) => {
		console.log(region);
	};

  // mapRef.current?.animateToRegion(GreenBayStadium);

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
      />
    </View>
  );
}


