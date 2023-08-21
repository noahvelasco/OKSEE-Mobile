import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import SearchBar from "./components/SearchBar";
import FilterChips from "./components/FilterChips";

import { locations } from "../../utils/locations";
import LocationItem from "./components/LocationItem";
import SelectedLocation from "../selectedLocationScreen/SelectedLocation";

const Locations = () => {
  const [modalVisible, setModalVisible] = useState(false); //if a user clicks on 'map' for an item => show modal
  const [selectedLocCoords, setSelectedLocCoords] = useState([]); // selected location coordinates
  const [selectedLocName, setSelectedLocName] = useState(""); // selected location coordinates
  const [selectedLocRating, setSelectedLocRating] = useState(""); // selected location rating
  const [selectedLocAddress, setSelectedLocAdress] = useState(""); // selected location address

  const [searchValue, onChangeText] = useState("");
  const [filters, setFilters] = useState({
    pizzaFilter: true,
    burgersFilter: true,
    cafeFilter: true,
  });

  const renderItem = ({ item }) => {
    //setFilters: returns an array of the filters that are set to true
    //ex. ["pizzaFilter", "burgersFilter", "cafeFilter"] will be returned on initial render so no filter is on.
    const setFilters = Object.keys(filters).filter(
      (key) => filters[key] === true
    );

    //if the item is part of the filter requested then return the item iff it passes filter
    if (searchValue == "" && setFilters.includes(item.associatedFilter)) {
      return (
        <LocationItem
          category={item.category}
          title={item.title}
          rating={item.rating}
          hours={item.hours}
          coords={item.coordinate}
          address={item.address}
          serviceOptions={item.serviceOptions}
          thumbnail={item.thumbnail}
          setSelectedLocCoords={setSelectedLocCoords}
          setSelectedLocName={setSelectedLocName}
          setSelectedLocRating={setSelectedLocRating}
          setSelectedLocAdress={setSelectedLocAdress}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      );
    }
    //if they have the filters on and the value in search box is not empty then continue
    if (searchValue != "" && setFilters.includes(item.associatedFilter)) {
      //if the search box value is a substring of the item
      if (
        item.title.substring(0, searchValue.length).toLowerCase() ==
        searchValue.toLowerCase()
      ) {
        return (
          <LocationItem
            category={item.category}
            title={item.title}
            rating={item.rating}
            hours={item.hours}
            coords={item.coordinate}
            address={item.address}
            serviceOptions={item.serviceOptions}
            thumbnail={item.thumbnail}
            setSelectedLocCoords={setSelectedLocCoords}
            setSelectedLocName={setSelectedLocName}
            setSelectedLocRating={setSelectedLocRating}
            setSelectedLocAdress={setSelectedLocAdress}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        );
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Establishments</Text>
        </View>

        <View style={styles.searchContainer}>
          <SearchBar value={searchValue} onChangeText={onChangeText} />
        </View>

        <View style={styles.chipContainer}>
          <FilterChips filters={filters} setFilters={setFilters} />
        </View>

        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../../../assets/images/splash.png")}
        />

        <View style={styles.listSection}>
          <FlatList
            data={locations}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        </View>

        <SelectedLocation
          title={selectedLocName}
          rating={selectedLocRating}
          address={selectedLocAddress}
          coords={selectedLocCoords}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </KeyboardAvoidingView>
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
    zIndex: 2,
  },
  title: {
    fontSize: 30,
    color: "#C0A080",
    fontFamily: "",
  },
  searchContainer: {
    flex: 0.4,
    justifyContent: "center",
    zIndex: 2,
    marginBottom: 5,
  },
  chipContainer: {
    flex: 0.25,
    justifyContent: "center",
    zIndex: 2,
    marginBottom: 5,
  },
  listSection: {
    zIndex: 2,
    flex: 3,
    backgroundColor: "rgba(100,100,100,.4)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logo: {
    zIndex: 1,
    top: "30%",
    width: "100%",
    position: "absolute",
    alignSelf: "center",
  },
});

export default Locations;
