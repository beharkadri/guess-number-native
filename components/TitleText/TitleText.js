import { Text } from "react-native";
import React from "react";

import styles from "./styles";

const TitleText = ({ children, style }) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

export default TitleText;
