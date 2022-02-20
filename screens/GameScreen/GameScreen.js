import { Alert, View, ScrollView, Dimensions } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import NumberContainer from "../../components/NumberContainer/NumberContainer";
import Card from "../../components/Card/Card";
import TitleText from "../../components/TitleText/TitleText";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../../components/MainButton/MainButton";

import styles from "./styles";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) generateRandomBetween(min, max, exclude);
  return randomNumber;
};

const GameScreen = ({ chosenNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, chosenNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRounds] = useState([initialGuess]);
  const [layout, setLayout] = useState("portrait");

  useEffect(() => {
    currentGuess === chosenNumber ? onGameOver(rounds.length) : null;
    const updateLayout = () => {
      setLayout(
        Dimensions.get("window").width > 500 ? "landscape" : "portrait"
      );
    };
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  const guessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess <= chosenNumber) ||
      (direction === "greater" && currentGuess >= chosenNumber)
    ) {
      Alert.alert("Don't Cheat", "This is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") currentHigh.current = currentGuess;
    else currentLow.current = currentGuess + 1;

    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);

    setRounds((prevRounds) => [nextGuess, ...prevRounds]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess:</TitleText>
      {layout === "portrait" && (
        <NumberContainer>{currentGuess}</NumberContainer>
      )}
      <Card style={styles.actions}>
        <View style={styles.button}>
          <MainButton onPress={guessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
        </View>
        {layout === "landscape" && (
          <NumberContainer>{currentGuess}</NumberContainer>
        )}
        <View style={styles.button}>
          <MainButton onPress={guessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {rounds.map((round, index) => (
            <View key={round} style={styles.listItem}>
              <TitleText>#{rounds.length - index}</TitleText>
              <TitleText>{round}</TitleText>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default GameScreen;
