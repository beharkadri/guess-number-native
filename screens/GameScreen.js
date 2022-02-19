import { Alert, StyleSheet, View, ScrollView } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import NumberContainer from "../components/NumberContainer/NumberContainer";
import Card from "../components/Card/Card";
import TitleText from "../components/TitleText/TitleText";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/MainButton/MainButton";

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

  useEffect(() => {
    currentGuess === chosenNumber ? onGameOver(rounds.length) : null;
    return () => {};
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
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.actions}>
        <View style={styles.button}>
          <MainButton onPress={guessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
        </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  actions: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  button: {
    width: 80,
  },
  listContainer: {
    flex: 1,
    width: "80%",
    marginVertical: 20,
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    width: "60%",
  },
});
