import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DefinitionView = ({ route }) => {
  const { definition } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text style={styles.definition}>{definition}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9", // Light background
  },
  descContainer: {
    width: "80%",
    height: 120,
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#d3d3d3", // Light gray border
    borderRadius: 5,
    backgroundColor: "white", // White box
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Shadow for Android
  },
  definition: {
    fontSize: 18,
    textAlign: "center",
    color: "#333", // Dark text for readability
  },
});

export default DefinitionView;
