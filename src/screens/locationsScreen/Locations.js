import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native";

import SearchBar from "./components/SearchBar";
import FilterChips from "./components/FilterChips";

import { locations } from "../../utils/locations";
import LocationItem from "./components/LocationItem";

const Locations = () => {
  const [value, onChangeText] = useState("");
  const [filters, setFilters] = useState({
    pizzaFilter: false,
    burgersFilter: false,
    cafeFilter: false,
  });

  const renderItem = ({ item }) => (
    <LocationItem
      category={item.category}
      title={item.title}
      rating={item.rating}
      hours={item.hours}
      serviceOptions={item.serviceOptions}
      thumbnail={item.thumbnail}
    />
  );

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
        <FlatList
          data={locations}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
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
  },
});

export default Locations;
