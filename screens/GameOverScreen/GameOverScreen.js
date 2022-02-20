import { View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import TitleText from "../../components/TitleText/TitleText";
import MainButton from "../../components/MainButton/MainButton";

import styles from "./styles";

const GameOverScreen = ({ rounds, number, onRestart }) => {
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").height < 400 ? 100 : 300
  );

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions(Dimensions.get("window").height < 400 ? 100 : 300);
    };
    Dimensions.addEventListener("change", updateDimensions);

    return () => {
      Dimensions.removeEventListener("change", updateDimensions);
    };
  });
  return (
    <View style={styles.over}>
      <TitleText>The Game is Over!</TitleText>
      <View
        style={{
          ...styles.imageWrap,
          width: dimensions,
          height: dimensions,
          borderRadius: dimensions / 2,
        }}
      >
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
