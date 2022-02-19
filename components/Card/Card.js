import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26, //iOS shadow
    elevation: 10, //Android shadow
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
