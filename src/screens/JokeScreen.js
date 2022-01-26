import React from "react";
import { useRecoilState } from "recoil";
import { StyleSheet, Text, View } from "react-native";
import { Title, Button } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

import { jokeDeliveryState, jokeSetupState } from "../../atoms/jokesAtom";

const JokeScreen = ({ navigation }) => {
  const [setup, setSetup] = useRecoilState(jokeSetupState);
  const [delivery, setDelivery] = useRecoilState(jokeDeliveryState);

  return (
    <View style={styles.container}>
      {setup ? (
        <>
          <View style={styles.containerJoke}>
            <Title style={styles.title}>Setup</Title>
            <Text style={styles.joke}>{setup}</Text>
          </View>
          <View tyle={styles.containerJoke}>
            <Title style={styles.title}>Punchline</Title>
            <Text style={styles.joke}>{delivery}</Text>
          </View>
          <View style={styles.containerButton}>
            <Button
              style={styles.button}
              icon={({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              )}
              color="#20272e"
              labelStyle={{ color: "#ffd453" }}
              mode="contained"
              onPress={() => navigation.navigate("HomeScreen")}
            >
              Back to Home
            </Button>
          </View>
        </>
      ) : (
        <View style={styles.error}>
          <Title style={styles.title}>
            You have to select and set at least one category
          </Title>
          <View style={styles.containerButton}>
            <Button
              style={styles.button}
              icon={({ color, size }) => (
                <Ionicons name="home-outline" color={color} size={size} />
              )}
              color="#20272e"
              labelStyle={{ color: "#ffd453" }}
              mode="contained"
              onPress={() => navigation.navigate("HomeScreen")}
            >
              Back to Home
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default JokeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  containerJoke: {
    marginBottom: 20,
  },

  title: {
    fontWeight: "bold",
  },

  joke: {
    fontWeight: "400",
  },

  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    marginTop: 50,
    width: "70%",
  },

  error: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
