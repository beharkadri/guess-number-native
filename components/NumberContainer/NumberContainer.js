import { View } from "react-native";
import React from "react";
import BodyText from "../BodyText/BodyText";

import styles from "./styles";

const NumberContainer = ({ children, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <BodyText style={styles.number}>{children}</BodyText>
    </View>
  );
};

export default NumberContainer;
