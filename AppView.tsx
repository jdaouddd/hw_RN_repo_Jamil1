import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import NewBookView from "../Views/NewBookView";
import ChartsView from "../Views/ChartsView";
import LibraryView from "../Views/LibraryView";
import BookDetailsView from "../Views/BookDetailsView";
import { RootStackParamList } from "../types";
import { LibraryProvider } from "../Controllers/LibraryContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const LibraryStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LibraryView"
        component={LibraryView}
        options={{ headerShown: false, title: "Library" }}
      />
      <Stack.Screen
        name="BookDetails"
        component={BookDetailsView}
        options={{ title: "Book Details" }}
      />
    </Stack.Navigator>
  );
};

const AppView: React.FC = () => {
  return (
    <LibraryProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }: { route: { name: string } }) => ({

            tabBarIcon: ({ color, size }: { color: string; size: number }) => {

              let iconName = "";
              if (route.name === "Library") {
                iconName = "library-sharp";
              } else if (route.name === "New Book") {
                iconName = "book-outline";
              } else if (route.name === "Charts") {
                iconName = "bar-chart";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            headerShown: false,
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Library" component={LibraryStackScreen} />
          <Tab.Screen name="New Book" component={NewBookView} />
          <Tab.Screen name="Charts" component={ChartsView} />
        </Tab.Navigator>
      </NavigationContainer>
    </LibraryProvider>
  );
};

export default AppView;
