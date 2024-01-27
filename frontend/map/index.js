import React, { useRef, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native';
//import Geolocation from "react-native-geolocation-service";
//import { useNavigation } from 'expo-router';

const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: 100.4444,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

export default function Mapping() {
 
  //const mapRef = useRef();
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
      provider={PROVIDER_GOOGLE}
      region={INITIAL_REGION}
      showsUserLocation
      showsMyLocationButton 
      //mapType='satellite'
      loadingEnabled
      //followsUserLocation={true}
      //ref={mapRef}
      onRegionChangeComplete={onRegionChange}
      //onUserLocationChange={event => console.log(event.nativeEvent)}
      />
    </View>
  );
}


