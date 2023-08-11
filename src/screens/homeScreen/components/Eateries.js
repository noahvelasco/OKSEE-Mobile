import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Eateries = ({
  pressedPizza,
  setPizza,
  pressedBurger,
  setBurger,
  pressedCoffee,
  setCoffee,
}) => {
  const [expanded, setExpanded] = useState(false);
  const rotation = new Animated.Value(expanded ? 1 : 0);
  const slideAnimation = new Animated.Value(expanded ? 0 : 100); // Initial position for slide animation
  const rotateChevron = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const toggleExpansion = () => {
    setExpanded(!expanded);

    Animated.parallel([
      Animated.timing(rotation, {
        toValue: expanded ? 0 : 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnimation, {
        toValue: expanded ? 100 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <View style={styles.expandableContainer}>
        {expanded && (
          <Animated.View
            style={{
              marginTop: 10,
              transform: [{ translateY: slideAnimation }],
            }}
          >
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {
                setPizza((prevState) => !prevState);
              }}
            >
              <Ionicons
                name="pizza-outline"
                size={25}
                color={pressedPizza ? "#4242EC" : "white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {
                setBurger((prevState) => !prevState);
              }}
            >
              <FontAwesome5
                name="hamburger"
                size={25}
                color={pressedBurger ? "#FFDB58" : "white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {
                setCoffee((prevState) => !prevState);
              }}
            >
              <Feather
                name="coffee"
                size={25}
                color={pressedCoffee ? "#E9985F" : "white"}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        <TouchableOpacity onPress={toggleExpansion}>
          <View style={[styles.circleButton, styles.chevronContainer]}>
            <Animated.View style={{ transform: [{ rotate: rotateChevron }] }}>
              <AntDesign name="down" size={18} color={"white"} />
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  expandableContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  chevronContainer: {
    marginTop: 10,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Eateries;
