import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LocationService {
  async getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return null;
    }
    const location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  }

  async saveLocation(locName: string) {
    const location = await this.getCurrentLocation();
    if (location) {
      await AsyncStorage.setItem(locName, JSON.stringify(location));
      alert("Car location saved!");
    }
  }

  async loadLocation(locName: string) {
    const locationData = await AsyncStorage.getItem(locName);
    return locationData ? JSON.parse(locationData) : null;
  }
}

export default new LocationService();
