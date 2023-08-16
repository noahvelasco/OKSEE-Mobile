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
              marginTop: 5,
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
                name="triangle-outline"
                size={25}
                color={pressedPizza ? "#FFFACD" : "grey"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {
                setBurger((prevState) => !prevState);
              }}
            >
              <Ionicons
                name="menu"
                size={25}
                color={pressedBurger ? "#D2691E" : "grey"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() => {
                setCoffee((prevState) => !prevState);
              }}
            >
              <FontAwesome5
                name="bullseye"
                size={24}
                color={pressedCoffee ? "#EEA977" : "grey"}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        <TouchableOpacity onPress={toggleExpansion}>
          <View style={[styles.circleButton, styles.chevronContainer]}>
            <Animated.View style={{ transform: [{ rotate: rotateChevron }] }}>
              <AntDesign name="down" size={18} color={"grey"} />
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
    marginTop: 5,
  },
  circleButton: {
    borderColor: "rgba(192, 160, 128, 0.5)",
    borderWidth: 2,
    backgroundColor: "#171717",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
});

export default Eateries;
