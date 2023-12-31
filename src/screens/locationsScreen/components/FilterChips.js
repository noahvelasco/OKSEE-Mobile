import React from "react";
import { StyleSheet } from "react-native";
import { Stack, Chip } from "@react-native-material/core";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const FilterChips = ({ filters, setFilters }) => {
  return (
    <Stack center spacing={30} direction="row">
      <Chip
        variant="filled"
        label={
          <Ionicons
            name="triangle-outline"
            size={25}
            color={filters.pizzaFilter ? "#C0A080" : "grey"}
          />
        }
        style={{ backgroundColor: "#333333" }}
        color="white"
        leading={
          filters.pizzaFilter ? (
            <Feather name="x-circle" size={24} color="#C0A080" />
          ) : (
            ""
          )
        }
        onPress={() => {
          setFilters((prevState) => ({
            ...prevState,
            pizzaFilter: !prevState.pizzaFilter,
          }));
        }}
      />
      <Chip
        variant="filled"
        label={
          <Ionicons
            name="menu"
            size={25}
            color={filters.burgersFilter ? "#C0A080" : "grey"}
          />
        }
        style={{ backgroundColor: "#333333" }}
        color="white"
        leading={
          filters.burgersFilter ? (
            <Feather name="x-circle" size={24} color="#C0A080" />
          ) : (
            ""
          )
        }
        onPress={() => {
          setFilters((prevState) => ({
            ...prevState,
            burgersFilter: !prevState.burgersFilter,
          }));
        }}
      />
      <Chip
        variant="filled"
        label={
          <FontAwesome5
            name="bullseye"
            size={24}
            color={filters.cafeFilter ? "#C0A080" : "grey"}
          />
        }
        style={{ backgroundColor: "#333333" }}
        color="white"
        leading={
          filters.cafeFilter ? (
            <Feather name="x-circle" size={24} color="#C0A080" />
          ) : (
            ""
          )
        }
        onPress={() => {
          setFilters((prevState) => ({
            ...prevState,
            cafeFilter: !prevState.cafeFilter,
          }));
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  chips: {
    flexDirection: "row",
  },
});

export default FilterChips;
