import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import * as Notifications from "expo-notifications";
import { StyleSheet, View } from "react-native";
import { Title, Drawer, Button } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  jokeDeliveryState,
  jokeSetupState,
  stringBlacklistState,
  stringCategoryState,
} from "../../atoms/jokesAtom";
import { getUrl } from "../api/fetchJoke";

const DrawerContent = (props) => {
  const [category, setCategory] = useRecoilState(stringCategoryState);
  const [blacklist, setBlacklist] = useRecoilState(stringBlacklistState);
  const [setup, setSetup] = useRecoilState(jokeSetupState);
  const [delivery, setDelivery] = useRecoilState(jokeDeliveryState);

  const getJoke = async () => {
    const url = getUrl(category, blacklist);
    setSetup("");
    setDelivery("");

    await axios.get(url).then((res) => {
      setSetup(res.data.setup);
      setDelivery(res.data.delivery);
    });
  };

  const triggerLocalNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Here is your joke",
      },
      trigger: null,
    });

    Notifications.addNotificationResponseReceivedListener(() => {
      props.navigation.closeDrawer();
      props.navigation.navigate("Joke");
    });
  };

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Title style={styles.title}>Jokes App</Title>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="home-outline" color="#ffd453" size={size} />
              )}
              label="Home"
              labelStyle={{ color: "#ffd453" }}
              onPress={() => props.navigation.navigate("HomeScreen")}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="book-outline" color="#ffd453" size={size} />
              )}
              label="How To Use"
              labelStyle={{ color: "#ffd453" }}
              onPress={() => props.navigation.navigate("HowToUseScreen")}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.buttonSection}>
            <Button
              style={styles.button}
              icon={({ color, size }) => (
                <Ionicons
                  name="chatbubbles-outline"
                  color={color}
                  size={size}
                />
              )}
              color="#ffd453"
              labelStyle={{ color: "#20272e" }}
              mode="contained"
              onPress={async () => {
                await getJoke().then(triggerLocalNotificationHandler());
              }}
              disabled={!category}
            >
              Show me a joke
            </Button>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#20272e",
  },

  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: "#ffd453",
    paddingLeft: 20,
  },

  drawerSection: {
    marginTop: 15,
  },

  buttonSection: {
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 200,
  },
});
