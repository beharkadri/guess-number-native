import { TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

export default Input;
