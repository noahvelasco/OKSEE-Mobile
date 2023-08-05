import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Home from "../homeScreen/Home";
import Locations from "../locationsScreen/Locations";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#C0A080",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#171717",
        },
        headerStyle: {
          backgroundColor: "#171717",
        },
        headerTitleStyle: {
          fontSize: 25,
          color: "#C0A080",
          alignSelf: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="map-outline"
              size={25}
              color={focused ? "#C0A080" : "white"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#C0A080" : "white"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
export default Tabs;
