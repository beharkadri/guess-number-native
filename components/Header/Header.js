import { StyleSheet, Text, View } from "react-native";
import React from "react";

import colors from "../../constants/colors";
import TitleText from "../TitleText/TitleText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: "black",
  },
  headerTitle: {
    color: "black",
  },
});
