import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [rounds, setRounds] = useState(0);
  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(false)}
        onError={(error) => {
          console.log(error);
        }}
      />
    );

  const startGameHandler = (selectedNumer) => {
    setChosenNumber(selectedNumer);
    setRounds(0);
  };

  const gameOverHandler = (rounds) => {
    setRounds(rounds);
  };

  let content = <StartGameScreen startGame={startGameHandler} />;
  let title = "Pick a Number";

  if (chosenNumber && rounds <= 0) {
    content = (
      <GameScreen chosenNumber={chosenNumber} onGameOver={gameOverHandler} />
    );
    title = "Play";
  }

  if (rounds > 0) {
    content = (
      <GameOverScreen
        rounds={rounds}
        number={chosenNumber}
        onRestart={startGameHandler}
      />
    );
    title = "Game Over";
  }

  return (
    <View style={styles.screen}>
      <Header title={title} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
