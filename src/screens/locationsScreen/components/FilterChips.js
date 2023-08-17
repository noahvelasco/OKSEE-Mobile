import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Stack, Chip } from "@react-native-material/core";
import { Octicons } from "@expo/vector-icons";
const FilterChips = ({ filters, setFilters }) => {
  const [pressedCafe, setCafe] = useState(false);

  return (
    <Stack fill center spacing={30} direction="row">
      <Chip
        variant="filled"
        label="Pizza △"
        style={{ backgroundColor: "#171717" }}
        color="#C0A080"
        leading={
          filters.pizzaFilter ? (
            <Octicons name="dot-fill" size={24} color="#C0A080" />
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
        label="Burgers ≡"
        style={{ backgroundColor: "#171717" }}
        color="#C0A080"
        leading={
          filters.burgersFilter ? (
            <Octicons name="dot-fill" size={24} color="#C0A080" />
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
        label="Cafés ◎"
        style={{ backgroundColor: "#171717" }}
        color="#C0A080"
        leading={
          filters.cafeFilter ? (
            <Octicons name="dot-fill" size={24} color="#C0A080" />
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
