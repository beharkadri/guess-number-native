import { View, Image } from "react-native";
import React from "react";
import TitleText from "../../components/TitleText/TitleText";
import MainButton from "../../components/MainButton/MainButton";
import styles from "./styles";

const GameOverScreen = ({ rounds, number, onRestart }) => {
  return (
    <View style={styles.over}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageWrap}>
        <Image
          source={require("../../assets/success.png")}
          style={styles.image}
        />
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
