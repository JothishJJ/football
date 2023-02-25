import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  function start() {
    setInterval(() => {
      let odds = Math.random();

      if (odds < 0.5) {
        Speech.speak("right", {
          language: "pt-BR",
        });
      } else {
        Speech.speak("left", {
          language: "pt-BR",
        });
      }
    }, 5000);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Tap to Start saying!</Text>
      <Button title="Start" onPress={start} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
