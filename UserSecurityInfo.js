import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Dimensions, PermissionsAndroid, Platform, Alert } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const UserMenu = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 42.3601, // Default to Boston
    longitude: -71.0589, // Default to Boston
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
      locateCurrentPosition();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Access Required",
            message: "This app needs to access your location",
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          locateCurrentPosition();
        } else {
          Alert.alert("Location Permission Denied");
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setRegion({
          ...region,
          latitude,
          longitude,
        });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        followsUserLocation={true}
      >
        {/* Circle for the pickup spot */}
        <View style={styles.pickupIndicator} />
      </MapView>
      <Button title="Confirm Pickup" onPress={() => Alert.alert("Pickup Confirmed", `Location: ${region.latitude}, ${region.longitude}`)} />
      <View style={styles.pickupIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  pickupIndicator: {
    position: 'absolute',
    height: 10,
    width: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    top: '50%',
    left: '50%',
    marginTop: -5, // half of the height
    marginLeft: -5, // half of the width
  },
});

export default UserMenu;
