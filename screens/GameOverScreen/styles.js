import { StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  over: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageWrap: {
    borderWidth: 1,
    overflow: "hidden",
    elevation: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
  },
});

export default styles;
