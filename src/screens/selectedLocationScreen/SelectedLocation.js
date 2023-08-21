import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import mapStyle from "../../utils/mapStyle.json";

const SelectedLocation = ({
  title,
  rating,
  address,
  coords,
  modalVisible,
  setModalVisible,
}) => {
  const [satelliteView, setSatelliteView] = useState(false);

  //animation to circle map
  const [heading, setHeading] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeading((prevHeading) => (prevHeading + 0.1) % 360); // Increment heading, and reset to 0 after reaching 360
    }, 10);

    return () => clearInterval(intervalId); // Clear the interval when component is unmounted
  }, []);

  //custom map style
  const styleMap = mapStyle;
  const locOfInterest = {
    latitude: coords[0],
    longitude: coords[1],
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.rating}>
              <MaterialIcons name="star-half" size={20} color="#A39300" />
              {rating}
            </Text>
            <Text style={styles.address}>{address}</Text>
          </View>
          <View style={styles.mapWrapper}>
            <MapView
              showsUserLocation={false}
              provider={PROVIDER_GOOGLE}
              showsCompass={false}
              showsMyLocationButton={false}
              showsBuildings={true}
              liteMode={false}
              userInterfaceStyle="dark"
              toolbarEnabled={false}
              zoomTapEnabled={false}
              zoomEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
              pitchEnabled={false}
              camera={{
                center: {
                  latitude: locOfInterest.latitude,
                  longitude: locOfInterest.longitude,
                },
                pitch: 60, // Change this value to set the desired pitch
                heading: heading, // Direction faced by the camera, in degrees clockwise from North.
                zoom: 18.5, // Closer values mean a higher zoom level.
              }}
              loadingEnabled={true}
              loadingIndicatorColor="#C0A080"
              loadingBackgroundColor="#171717"
              customMapStyle={styleMap}
              style={styles.map}
              mapType={satelliteView ? "satellite" : "standard"}
            >
              <Marker coordinate={locOfInterest} title={"title"}>
                <Image
                  source={require("../../../assets/images/marker.png")}
                  style={{ width: 30, height: 30, tintColor: "#CF5C5C" }}
                />
              </Marker>
            </MapView>
            <TouchableOpacity
              style={styles.layersButton}
              onPress={() => {
                setSatelliteView((prevState) => !prevState);
              }}
            >
              <MaterialCommunityIcons
                name="layers-outline"
                size={30}
                color="#C0A080"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textClose}>close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  modalView: {
    width: "90%", // Define the desired width
    height: "85%", // Define the desired height
    backgroundColor: "#171717",
    borderColor: "#C0A080",
    borderWidth: 2,
    borderRadius: 20,
    position: "relative",
    justifyContent: "space-around", // Center content vertically
    padding: 20, // Add padding for space
  },

  headerWrapper: { alignItems: "center", overflow: "hidden" },
  title: { color: "white", fontSize: 25 },
  rating: { color: "white", fontSize: 15 },
  address: { color: "grey", fontSize: 15 },

  mapWrapper: {
    flex: 0.75,
    borderRadius: 20,
    borderColor: "rgba(192, 160, 128, 0.5)",
    borderWidth: 5,
    overflow: "hidden", // Add this line
  },

  map: {
    flex: 1,
  },

  layersButton: {
    padding: 10,
    position: "absolute",
    backgroundColor: "#171717",
    borderRadius: 25,
    alignSelf: "flex-end",
    bottom: 10,
    right: 10,
  },

  textClose: {
    color: "white",
  },
  buttonClose: {
    width: "95%",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#C0A080",
    alignSelf: "center", // Center the button horizontally
  },
});

export default SelectedLocation;
