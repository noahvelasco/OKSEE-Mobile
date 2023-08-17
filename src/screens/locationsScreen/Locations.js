import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchBar from "./components/SearchBar";
import FilterChips from "./components/FilterChips";

const Locations = () => {
  const [value, onChangeText] = useState("");
  const [filters, setFilters] = useState({
    pizzaFilter: false,
    burgersFilter: false,
    cafeFilter: false,
  });

  console.log(filters);

  return (
    <LinearGradient
      style={styles.container}
      colors={["#E9D0B0", "#C0A080", "#9C715F", "#171717"]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Locations</Text>
      </View>

      <SearchBar
        style={styles.searchContainer}
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.chipContainer}>
        <FilterChips filters={filters} setFilters={setFilters} />
      </View>
      <View style={styles.listSection}>
        <Text>List Section</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  titleContainer: {
    flex: 0.25,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#503B32",
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
  },
  chipContainer: {
    flex: 0.25,
    justifyContent: "center",
    marginBottom: 10,
  },
  listSection: {
    flex: 3,
    backgroundColor: "rgba(100,100,100,.4)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Locations;
