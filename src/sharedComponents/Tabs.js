import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/homeScreen/Home";
import Locations from "../screens/locationsScreen/Locations";

const Tab = createBottomTabNavigator();

function Tabs({ currWeather, forecast }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#C0A080",
        tabBarStyle: {
          backgroundColor: "#171717",
        },
        headerShown: false, // Add this line to hide the header
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
        options={{
          tabBarLabel: "Map", // Add this line to remove the tab bar text
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="map-outline"
              size={25}
              color={focused ? "#C0A080" : "white"}
            />
          ),
        }}
      >
        {() => <Home currWeather={currWeather} forecast={forecast} />}
      </Tab.Screen>

      <Tab.Screen
        name="Locations"
        options={{
          tabBarLabel: "Est.", // Add this line to remove the tab bar text
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#C0A080" : "white"}
            />
          ),
        }}
      >
        {() => <Locations />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;
