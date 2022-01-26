import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Checkbox, Title, Button } from "react-native-paper";

import {
  blacklistFlagsState,
  categoryState,
  stringCategoryState,
  stringBlacklistState,
} from "../../atoms/jokesAtom";

const HomeScreen = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const [blacklist, setBlacklist] = useRecoilState(blacklistFlagsState);

  const [categoryString, setCategoryString] =
    useRecoilState(stringCategoryState);
  const [blacklistString, setBlacklistString] =
    useRecoilState(stringBlacklistState);

  const [programming, setProgramming] = useState(false);
  const [misc, setMisc] = useState(false);
  const [dark, setDark] = useState(false);
  const [pun, setPun] = useState(false);
  const [spooky, setSpooky] = useState(false);
  const [christmas, setChristmas] = useState(false);

  const [nsfw, setNsfw] = useState(false);
  const [religious, setReligious] = useState(false);
  const [political, setPolitical] = useState(false);
  const [racist, setRacist] = useState(false);
  const [sexist, setSexist] = useState(false);
  const [explicit, setExplicit] = useState(false);

  const setParams = () => {
    let categoryTemp = [];
    let blacklistTemp = [];

    if (programming) categoryTemp.push("Programming");
    if (misc) categoryTemp.push("Miscellaneous");
    if (dark) categoryTemp.push("Dark");
    if (pun) categoryTemp.push("Pun");
    if (spooky) categoryTemp.push("Spooky");
    if (christmas) categoryTemp.push("Christmas");

    if (nsfw) blacklistTemp.push("nsfw");
    if (religious) blacklistTemp.push("religious");
    if (political) blacklistTemp.push("political");
    if (racist) blacklistTemp.push("racist");
    if (sexist) blacklistTemp.push("sexist");
    if (explicit) blacklistTemp.push("explicit");

    setCategory(categoryTemp);
    setBlacklist(blacklistTemp);
    setCategoryString(categoryTemp.join());
    setBlacklistString(blacklistTemp.join());
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Title>Select category/categories (required)</Title>
      <View style={styles.containerCheckbox}>
        <View style={styles.option}>
          <Text>Programming</Text>
          <Checkbox
            status={programming ? "checked" : "unchecked"}
            onPress={() => {
              setProgramming(!programming);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Miscellaneous</Text>
          <Checkbox
            status={misc ? "checked" : "unchecked"}
            onPress={() => {
              setMisc(!misc);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Dark</Text>
          <Checkbox
            status={dark ? "checked" : "unchecked"}
            onPress={() => {
              setDark(!dark);
            }}
            color="#20272e"
          />
        </View>
      </View>

      <View style={styles.containerCheckbox}>
        <View style={styles.option}>
          <Text>Pun</Text>
          <Checkbox
            status={pun ? "checked" : "unchecked"}
            onPress={() => {
              setPun(!pun);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Spooky</Text>
          <Checkbox
            status={spooky ? "checked" : "unchecked"}
            onPress={() => {
              setSpooky(!spooky);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Christmas</Text>
          <Checkbox
            status={christmas ? "checked" : "unchecked"}
            onPress={() => {
              setChristmas(!christmas);
            }}
            color="#20272e"
          />
        </View>
      </View>

      <Title>Select flags to blacklist (optional)</Title>
      <View style={styles.containerCheckbox}>
        <View style={styles.option}>
          <Text>NSFW</Text>
          <Checkbox
            status={nsfw ? "checked" : "unchecked"}
            onPress={() => {
              setNsfw(!nsfw);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Religious</Text>
          <Checkbox
            status={religious ? "checked" : "unchecked"}
            onPress={() => {
              setReligious(!religious);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Political</Text>
          <Checkbox
            status={political ? "checked" : "unchecked"}
            onPress={() => {
              setPolitical(!political);
            }}
            color="#20272e"
          />
        </View>
      </View>

      <View style={styles.containerCheckbox}>
        <View style={styles.option}>
          <Text>Racist</Text>
          <Checkbox
            status={racist ? "checked" : "unchecked"}
            onPress={() => {
              setRacist(!racist);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Sexist</Text>
          <Checkbox
            status={sexist ? "checked" : "unchecked"}
            onPress={() => {
              setSexist(!sexist);
            }}
            color="#20272e"
          />
        </View>
        <View style={styles.option}>
          <Text>Explicit</Text>
          <Checkbox
            status={explicit ? "checked" : "unchecked"}
            onPress={() => {
              setExplicit(!explicit);
            }}
            color="#20272e"
          />
        </View>
      </View>

      <View style={styles.buttonSection}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={setParams}
          color="#20272e"
          labelStyle={{ color: "#ffd453" }}
        >
          Set Joke Parameters
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  containerCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 10,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonSection: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: "65%",
  },
});
