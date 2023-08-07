import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Error = () => {
  return (
    <View style={styles.container}>
      <Text>Sorry Something Went Wrong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default Error;
