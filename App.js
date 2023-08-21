import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";

import { setSawIntro, sawIntro } from "./src/utils/AsyncStorage";
import { useGetWeather } from "./src/hooks/useGetWeather";
import Tabs from "./src/sharedComponents/Tabs";
import Error from "./src/screens/Error";

export default function App() {
  const [loading, error, currWeather, forecast] = useGetWeather();
  // Add these state variables at the beginning of your App component:
  const [hasSeenIntro, setHasSeenIntro] = useState(null);

  //check if user has been on app  before to show intro screen if user hasnt seen it yet
  useEffect(() => {
    // Fetch the value when the component mounts
    const fetchIntroValue = async () => {
      const value = await sawIntro();
      setHasSeenIntro(value);
    };

    fetchIntroValue();
  }, [hasSeenIntro]);

  //This is how each introduction screen will be rendered
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>

        <View
          style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}
        >
          <LottieView
            source={item.lottie} // You will replace 'image' with 'lottie'
            autoPlay
            loop
            style={{
              width: "80%",
              aspectRatio: 1,
              backgroundColor: "rgba(200,200,200.4)",
            }} // Adjust size as necessary
          />
        </View>

        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  if (hasSeenIntro === "true") {
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
    } else {
      return (
        <SafeAreaView style={styles.container}>
          {error ? (
            <Error />
          ) : (
            <View>
              <Text style={styles.loadingText}>Loading...</Text>
              <ActivityIndicator size={"large"} color={"#C0A080"} />
            </View>
          )}
        </SafeAreaView>
      );
    }
  } else {
    return (
      <AppIntroSlider
        renderItem={RenderItem}
        data={slides}
        onDone={async () => {
          await setSawIntro(true);
          setHasSeenIntro(true);
        }}
        dotStyle={styles.dotStyle} // for inactive dots
        activeDotStyle={styles.activeDotStyle} // for the active dot
      />
    );
  }
}

// ... [rest of your imports and main code]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#171717",
  },
  loadingText: {
    alignSelf: "center",
    marginVertical: 20,
    color: "#C0A080",
    fontSize: 20,
  },
  introTextStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "#C0A080", // Accent color
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  dotStyle: {
    backgroundColor: "grey", // Color for inactive dots
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: "#C0A080", // Color for the active dot, using the accent color
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});

const slides = [
  {
    key: "s1",
    title: "Welcome to OKSEE",
    text: "Discover exquisite dining spots and stay updated with the local weather in OKC.",
    lottie: require("./assets/lottie/city.json"),

    backgroundColor: "#171717",
  },
  {
    key: "s2",
    title: "Filter Locations\nEffortlessly",
    text: "△ Pizza\n\n≡ Burgers\n\n◎ Coffee",
    lottie: require("./assets/lottie/mapkey.json"),

    backgroundColor: "#2C2C2C",
  },
  {
    key: "s3",
    title: "Bird's Eye View",
    text: "View from above: Spot parking, ramps, and more with satellite clarity.",
    lottie: require("./assets/lottie/eye.json"),

    backgroundColor: "#171717",
  },
];

// ... [rest of your code]
