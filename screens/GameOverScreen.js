import { Button, StyleSheet, View, Image } from "react-native";
import React from "react";
import TitleText from "../components/TitleText/TitleText";
import colors from "../constants/colors";
import MainButton from "../components/MainButton/MainButton";

const GameOverScreen = ({ rounds, number, onRestart }) => {
  return (
    <View style={styles.over}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageWrap}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <TitleText>
        Took <TitleText style={styles.highlight}>{rounds}</TitleText> rounds to
        finish!
      </TitleText>
      <TitleText>
        The number was <TitleText style={styles.highlight}>{number}</TitleText>!
      </TitleText>
      <MainButton onPress={onRestart.bind(this, "")}>New Game</MainButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  over: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageWrap: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 150,
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
