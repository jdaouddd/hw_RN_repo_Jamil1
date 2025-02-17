import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ReposView from "./ReposView";
import RepoDetailsView from "./RepoDetailsView";
import { RepoProvider } from "../Controllers/RepoContext";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator();

const AppView: React.FC = () => {
  return (
    <RepoProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
          <Stack.Screen name="ReposView" component={ReposView} options={{ title: "Repositories" }} />
          <Stack.Screen name="RepoDetails" component={RepoDetailsView} options={{ title: "Repository Details" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RepoProvider>
  );
};

export default AppView;


