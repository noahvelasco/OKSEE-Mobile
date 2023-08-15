import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Locations = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <LinearGradient
      style={styles.container}
      colors={["#E9D0B0", "#C0A080", "#9C715F", "#171717"]}
    >
      <View style={styles.searchSection}>
        <Text style={styles.title}>Locations</Text>
        <TextInput
          cursorColor={"black"}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder="Hall's Pizzeria"
        />
      </View>

      <View style={styles.listSection}>
        <Text>List Section</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "gray" },
  searchSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listSection: {
    flex: 3,
    backgroundColor: "rgba(100,100,100,.4)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#171717",
  },
  input: {
    height: 40,
    width: "75%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

export default Locations;
