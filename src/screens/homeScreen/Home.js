import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Weather from "./components/Weather";

const Home = ({ weather }) => {
  return (
    <View style={styles.container}>
      <View style={styles.weather}>
        <Weather allWeather={weather} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  weather: {
    flex: 1,
    margin: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Home;
