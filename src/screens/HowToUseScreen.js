import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Title } from "react-native-paper";

const HowToUseScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>How to use</Title>
      <Text style={styles.paragraph}>
        First, select at least one joke category. If you do not want to see any
        specific joke category, you can add that to the blacklist.
      </Text>
      <Text style={styles.paragraph}>
        After, click on "Set Joke Parameters" and open the drawer.
      </Text>
      <Text style={styles.paragraph}>
        To receive a joke, click on "Show me a Joke" and click on the
        notification to open the Joke Screen.
      </Text>
    </SafeAreaView>
  );
};

export default HowToUseScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  title: {
    fontWeight: "bold",
  },

  paragraph: {
    paddingVertical: 10,
  },
});
