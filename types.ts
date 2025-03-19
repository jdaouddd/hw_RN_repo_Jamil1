import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined;
    Map: undefined;
  };
  

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type Location = {
  latitude: number;
  longitude: number;
};
