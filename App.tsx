import React from "react";
import { SafeAreaView } from "react-native";
import AppView from "./Views/AppView";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppView />
    </SafeAreaView>
  );
}
