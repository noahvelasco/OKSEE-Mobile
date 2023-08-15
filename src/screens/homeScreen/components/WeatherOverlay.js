import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { weatherType } from "../../../utils/weatherType";

const WeatherOverlay = ({ currWeather }) => {
  // console.log(currWeather);
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
        {/* <Text>{moment(dt).format("MMMM Do YYYY, h:mm:ss a")}</Text> */}
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
    borderColor: "rgba(192, 160, 128, 0.5)",
    borderWidth: 2,
  },
  forecast: {
    color: "white",
  },
  temp: { color: "white" },
});

export default WeatherOverlay;
