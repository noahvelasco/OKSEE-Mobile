import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        cursorColor={"black"}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Hall's Pizzeria"
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
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

export default SearchBar;
