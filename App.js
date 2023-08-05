import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tabs from "./src/sharedComponents/Tabs";

const Tab = createBottomTabNavigator(); //Initialize the tab object

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#white",
    alignItems: "center",
    justifyContent: "center",
  },
});
