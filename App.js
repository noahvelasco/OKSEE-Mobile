import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Tabs from "./src/sharedComponents/Tabs";

import { useGetWeather } from "./src/hooks/useGetWeather";
import Error from "./src/screens/Error";

const Tab = createBottomTabNavigator(); //Initialize the tab object

export default function App() {
  //upon initialization, get the weather and users location
  const [loading, error, weather] = useGetWeather();

  /*
  Home Screen if we retrieved the weather
  */
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  /*
  Loading || Error Screen
  */
  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Error />
      ) : (
        <ActivityIndicator size={"large"} color={"#C0A080"} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#171717",
  },
});
