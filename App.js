import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/sharedComponents/Tabs";

import { useGetWeather } from "./src/hooks/useGetWeather";
import Error from "./src/screens/Error";

export default function App() {
  //upon initialization, get the weather (future and current) and users location
  const [loading, error, currWeather, forecast] = useGetWeather();

  /*
  Home Screen if we retrieved the current weather and the forecast
  */
  if (
    currWeather &&
    currWeather.main &&
    forecast &&
    forecast.list &&
    !loading
  ) {
    return (
      <NavigationContainer>
        <Tabs currWeather={currWeather} forecast={forecast} />
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
        <View>
          <Text
            style={{
              alignSelf: "center",
              marginVertical: 20,
              color: "#C0A080",
              fontSize: 20,
            }}
          >
            Loading...
          </Text>
          <ActivityIndicator size={"large"} color={"#C0A080"} />
        </View>
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
