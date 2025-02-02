import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CommandView from "./views/CommandView";
import DefinitionView from "./views/DefinitionView";
import { View } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CommandView">
        <Stack.Screen name="CommandView" component={CommandView} options={{ title: "Rails Commands" }}/>
        <Stack.Screen name="DefinitionView" component={DefinitionView}  options={({ route }) => ({ title: route.params.command })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

