import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  Alert,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import WeatherOverlay from "./components/WeatherOverlay";
import Eateries from "./components/Eateries";
import WeatherModal from "./components/WeatherModal";
import locations from "../../utils/locations";

const Home = ({ weather }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#171717" barStyle="light-content" />

      {/* This is the weather component at the top - when clicked the full weather comes up */}
      <View style={styles.weather}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <WeatherOverlay allWeather={weather} />
        </TouchableOpacity>
        <WeatherModal
          city={weather.city.name}
          weather={weather.list}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>

      <View style={styles.eateries}>
        <Eateries />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 35.4676,
          longitude: -97.5164,
          latitudeDelta: 0.6, // Controls the zoom level (latitude span)
          longitudeDelta: 0.6, // Controls the zoom level (longitude span)
        }}
      />
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
    right: 10,
    bottom: 10,
    alignSelf: "flex-end",
    zIndex: 1,
  },
});

export default Home;
