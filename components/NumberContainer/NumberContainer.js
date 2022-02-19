import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import BodyText from "../BodyText/BodyText";

const NumberContainer = ({ children, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <BodyText style={styles.number}>{children}</BodyText>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.accent,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: colors.accent,
    fontSize: 22,
  },
});
