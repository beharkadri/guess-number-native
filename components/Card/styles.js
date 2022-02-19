import { StyleSheet } from "react-native";

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

export default styles;
