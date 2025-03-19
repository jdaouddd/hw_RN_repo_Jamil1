import React from "react";
import { View, StyleSheet } from "react-native";
import AppView from "./Views/AppView";

export default function App() {
  return (
    <View style={styles.container}>
      <AppView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
