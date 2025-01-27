import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Topbar from "./topbar";
import TempConverter from "./tempConverter";

export default function App() {
  return (
    <View>
     <Topbar title="TempConverter" />
     <TempConverter />

      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
