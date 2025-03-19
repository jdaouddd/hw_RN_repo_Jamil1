import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LocationService from "../Services/LocationService";
import { RootStackNavigationProp } from "../types";

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleSaveCarLocation = async () => {
    await LocationService.saveLocation("carLocation");
  };

  return (
    <View style={styles.container}>
      <Button title="HERE’S MY CAR" onPress={handleSaveCarLocation} />
      <Button title="WHERE’S MY CAR?" onPress={() => navigation.navigate("Map")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
});

export default HomeScreen;
