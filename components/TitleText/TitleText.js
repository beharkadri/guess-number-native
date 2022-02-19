import { StyleSheet, Text } from "react-native";
import React from "react";

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});
