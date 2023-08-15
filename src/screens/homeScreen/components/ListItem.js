import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../../../utils/weatherType";
import moment from "moment/moment";

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, date } = styles;

  return (
    <View style={item}>
      <Text style={date}>{moment(dt_txt).subtract(6, "hours").calendar()}</Text>

      <View style={styles.weatherStatus}>
        <Feather
          name={weatherType[condition]?.icon}
          size={25}
          color="#C0A080"
        />

        <Text style={styles.weatherStatusText}>
          {weatherType[condition]?.description}
        </Text>
      </View>

      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C0A080",
    borderBottomWidth: 2,
    borderRadius: 15,
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
    paddingBottom: 10,
    alignSelf: "flex-start",
  },
  weatherStatus: {
    flexDirection: "row",
  },

  weatherStatusText: {
    paddingLeft: 10,
    color: "white",
  },
});

export default ListItem;
