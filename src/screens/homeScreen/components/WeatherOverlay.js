import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../../../utils/weatherType";

const WeatherOverlay = ({ allWeather }) => {
  const currWeather = allWeather.list[0];
  const {
    main: { temp },
    weather,
  } = currWeather;

  const weatherCondition = weather[0]?.main;

  return (
    <View style={styles.container}>
      <Feather
        name={weatherType[weatherCondition].icon}
        size={24}
        color="white"
      />

      <View>
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
        <Text style={styles.forecast}>
          {weatherType[weatherCondition].description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 150,
    borderRadius: 25,
    backgroundColor: "#171717",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  forecast: {
    color: "white",
  },
  temp: { color: "white" },
});

export default WeatherOverlay;
