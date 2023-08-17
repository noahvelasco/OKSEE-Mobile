import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        color={"white"}
        cursorColor={"white"}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Hall's Pizzeria"
        placeholderTextColor={"white"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    alignItems: "center",
  },

  input: {
    height: 40,
    width: "85%",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#C0A080",
    backgroundColor: "#333333",
    padding: 10,
  },
});

export default SearchBar;
