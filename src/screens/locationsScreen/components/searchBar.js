import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        color={"white"}
        cursorColor={"white"}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Search..."
        placeholderTextColor={"grey"}
      />
      <Entypo
        name="magnifying-glass"
        size={20}
        color="white"
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#333333",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#C0A080",
    width: "85%",
    padding: 2,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    color: "white",
    height: 40,
    padding: 0, // Reset the padding here and manage it in the searchBar wrapper
  },
  icon: {
    position: "absolute",
    right: 15, // Adjust according to your design
  },
});

export default SearchBar;
