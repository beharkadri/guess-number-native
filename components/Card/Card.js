import { View } from "react-native";
import React from "react";

import styles from "./styles";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;
