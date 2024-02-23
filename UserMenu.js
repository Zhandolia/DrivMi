import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const UserMenu = ({ navigation }) => {
  const handleConfirmPickup = () => {
    Alert.alert("Pickup Confirmed", "Your pickup has been confirmed. A driver will be with you shortly.");
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // Customize the map as needed
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Confirm Pickup"
          onPress={handleConfirmPickup}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    marginBottom: 30,
  },
});

export default UserMenu;
