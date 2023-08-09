import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Eateries = () => {
  const [pressedPizza, setPizza] = useState(false);
  const [pressedBurger, setBurger] = useState(false);
  const [pressedCoffee, setCoffee] = useState(false);
  const onPressPizza = () => setPizza((prevState) => !prevState);
  const onPressBurger = () => setBurger((prevState) => !prevState);
  const onPressCoffee = () => setCoffee((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <View style={styles.pizzaButton}>
        <TouchableOpacity onPress={onPressPizza}>
          <Ionicons
            name="pizza-outline"
            size={30}
            color={pressedPizza ? "#C0A080" : "white"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.burgerButton}>
        <TouchableOpacity onPress={onPressBurger}>
          <FontAwesome5
            name="hamburger"
            size={30}
            color={pressedBurger ? "#C0A080" : "white"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.coffeeButton}>
        <TouchableOpacity onPress={onPressCoffee}>
          <Feather
            name="coffee"
            size={30}
            color={pressedCoffee ? "#C0A080" : "white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },

  pizzaButton: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#171717",
  },
  burgerButton: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#171717",
  },
  coffeeButton: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#171717",
  },
});

export default Eateries;
