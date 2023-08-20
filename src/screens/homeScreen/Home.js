import React, { useState } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import WeatherOverlay from "./components/WeatherOverlay";
import Eateries from "./components/Eateries";
import WeatherModal from "./components/WeatherModal";
import { locations } from "../../utils/locations";
import mapStyle from "../../utils/mapStyle.json";

const Home = ({ currWeather, forecast }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pressedPizza, setPizza] = useState(false);
  const [pressedBurger, setBurger] = useState(false);
  const [pressedCoffee, setCoffee] = useState(false);

  //custom map style
  const styleMap = mapStyle;

  const showMarkers = () => {
    //map the locations at render/rerender
    return locations.map((item, index) => {
      //if pizza button pressed then show its markers
      if (pressedPizza && item.category == "pizza") {
        return (
          <Marker key={index} coordinate={item.coordinate} title={item.title}>
            <Image
              source={require("../../../assets/images/marker.png")}
              style={{ width: 30, height: 30, tintColor: "#FFFACD" }}
            />
          </Marker>
        );
      }
      if (pressedBurger && item.category == "burger") {
        return (
          <Marker key={index} coordinate={item.coordinate} title={item.title}>
            <Image
              source={require("../../../assets/images/marker.png")}
              style={{ width: 30, height: 30, tintColor: "#D2691E" }}
            />
          </Marker>
        );
      }
      if (pressedCoffee && item.category == "coffee") {
        return (
          <Marker key={index} coordinate={item.coordinate} title={item.title}>
            <Image
              source={require("../../../assets/images/marker.png")}
              style={{ width: 30, height: 30, tintColor: "#EEA977" }}
            />
          </Marker>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#171717" barStyle="light-content" />

      {/* This is the weather component at the top - when clicked the full weather comes up */}
      <View style={styles.weather}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <WeatherOverlay currWeather={currWeather} />
        </TouchableOpacity>
        <WeatherModal
          currWeather={currWeather}
          city={forecast.city.name}
          weather={forecast.list}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>

      <View style={styles.eateries}>
        <Eateries
          pressedPizza={pressedPizza}
          setPizza={setPizza}
          pressedBurger={pressedBurger}
          setBurger={setBurger}
          pressedCoffee={pressedCoffee}
          setCoffee={setCoffee}
        />
      </View>

      <MapView
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsCompass={true}
        showsMyLocationButton={false}
        showsBuildings={true}
        liteMode={false}
        userInterfaceStyle="dark"
        toolbarEnabled={false}
        // mapPadding={{ left: windowWidth * 0.85 }}
        initialRegion={{
          latitude: 35.4676,
          longitude: -97.5164,
          latitudeDelta: 0.05, // Controls the zoom level (latitude span)
          longitudeDelta: 0.05, // Controls the zoom level (longitude span)
        }}
        customMapStyle={styleMap}
      >
        {showMarkers()}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  weather: {
    position: "absolute",
    top: 50,
    alignSelf: "center",
    zIndex: 1,
  },
  eateries: {
    position: "absolute",
    right: 12,
    bottom: 0,
    alignSelf: "flex-end",
    zIndex: 1,
  },
});

export default Home;
