import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator();

const AppView = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppView;
