import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const AboutScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <Text>About</Text>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
