import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./src/navigation/AuthStack";
import HomeTabNavigator from "./src/navigation/bottomTabNav";
export default function App() {

  return (
    <NavigationContainer>
      <HomeTabNavigator />
    </NavigationContainer>
  );
}


//     <AuthStackNavigator />