import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const LocationItem = (props) => {
  const { category, title, rating, hours, serviceOptions, thumbnail } = props;

  return (
    <View style={styles.item}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.category}>{category}</Text>
      </View>

      <View style={styles.midSection}>
        <Image style={styles.image} source={thumbnail} />
        <View style={styles.midSectionTextWrapper}>
          <Text style={styles.midSectionTextRating}>
            <MaterialIcons name="star-half" size={20} color="#A39300" />
            {rating}
          </Text>
          <Text style={styles.midSectionTextHours}>{hours}</Text>
          <Text style={styles.midSectionTextSO}>{serviceOptions}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#171717",
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 20,
    flexDirection: "column",
    borderColor: "#C0A080",
    borderRadius: 25,
  },
  titleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    flexDirection: "row",
    color: "white",
  },
  category: {
    color: "grey",
  },

  midSection: {
    flexDirection: "row",
  },
  midSectionTextWrapper: { justifyContent: "space-evenly" },
  midSectionTextRating: { color: "#C0A080", fontSize: 15 },
  midSectionTextHours: { color: "white", fontSize: 12 },
  midSectionTextSO: { color: "grey", fontSize: 12 },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    margin: 10,
    borderWidth: 2,
    borderColor: "#C0A080",
  },

  description: {
    color: "white",
  },

  mapButton: {
    backgroundColor: "#C0A080",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  mapText: {
    color: "white",
  },
});

export default LocationItem;
