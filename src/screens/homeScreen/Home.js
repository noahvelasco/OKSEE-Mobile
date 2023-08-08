import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

import Weather from "./components/Weather";

const Home = ({ weather }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#171717" barStyle="light-content" />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.4676,
          longitude: -97.5164,
          latitudeDelta: 0.6, // Controls the zoom level (latitude span)
          longitudeDelta: 0.6, // Controls the zoom level (longitude span)
        }}
      />
      <View style={styles.weather}>
        <Weather allWeather={weather} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  weather: {
    position: "absolute", // Position the Weather component absolutely
    marginTop: 50,
    justifyContent: "flex-start",
    alignSelf: "center",
    zIndex: 1, // Ensure the Weather component appears above the map
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Home;
