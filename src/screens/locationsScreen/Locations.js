import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SearchBar from "./components/SearchBar";
import FilterChips from "./components/FilterChips";
import { SafeAreaView } from "react-native-safe-area-context";

const Locations = () => {
  const [value, onChangeText] = useState("");
  const [filters, setFilters] = useState({
    pizzaFilter: false,
    burgersFilter: false,
    cafeFilter: false,
  });

  console.log(filters);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Establishments</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  titleContainer: {
    flex: 0.25,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    color: "#C0A080",
    fontFamily: "",
  },
  searchContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 5,
  },
  chipContainer: {
    flex: 0.25,
    justifyContent: "center",
    marginBottom: 5,
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
