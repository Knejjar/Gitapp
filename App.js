import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserScreen from "./src/screens/UserScreen";
import Home from "./src/screens/Home";

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="GitHub App Api" component={Home} />
        <HomeStack.Screen name="User" component={UserScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}