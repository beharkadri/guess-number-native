import { View } from "react-native";
import React from "react";
import TitleText from "../TitleText/TitleText";

import styles from "./styles";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

export default Header;
