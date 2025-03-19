import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import LocationService from "../Services/LocationService";
import { Location } from "../types";

const MapScreen = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [carLocation, setCarLocation] = useState<Location | null>(null);
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    (async () => {
      const userLoc = await LocationService.getCurrentLocation();
      setUserLocation(userLoc);

      const savedCarLoc = await LocationService.loadLocation("carLocation");
      setCarLocation(savedCarLoc);

      if (mapRef.current && userLoc) {
        mapRef.current.animateToRegion({
          latitude: userLoc.latitude,
          longitude: userLoc.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map} showsUserLocation={true} showsMyLocationButton={true}>
        {carLocation && <Marker coordinate={carLocation} title="My Car" />}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapScreen;
