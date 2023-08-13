import React from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ListItem from "./ListItem";

const WeatherModal = ({ city, weather, modalVisible, setModalVisible }) => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );

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
          <Text style={styles.modalTextTitle}>
            {`${city} `}
            <Feather name="map-pin" size={28} color="white" />
          </Text>
          <View
            style={{
              borderBottomColor: "white",
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: "95%",
              alignSelf: "center",
            }}
          />

          <FlatList
            data={weather}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
          />

          {/* Add a space below the line */}
          <View style={{ flex: 1 }} />

          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textClose}>close</Text>
          </Pressable>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    width: "80%", // Define the desired width
    height: "65%", // Define the desired height
    backgroundColor: "#171717",
    borderColor: "rgba(192, 160, 128, 0.5)",
    borderWidth: 2,
    borderRadius: 20,
    position: "relative",
    justifyContent: "center", // Center content vertically
    padding: 20, // Add padding for space
  },
  modalTextTitle: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
  },
  textClose: {
    color: "white",
  },
  buttonClose: {
    width: "80%",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#C0A080",
    alignSelf: "center", // Center the button horizontally
  },
});

export default WeatherModal;
