import { StyleSheet, Text } from "react-native";
import React from "react";

const BodyText = ({ children, style }) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});
