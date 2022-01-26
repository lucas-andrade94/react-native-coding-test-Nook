import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Title, Drawer, Button } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

const DrawerContent = (props) => {
  const [loading, setLoading] = useState(false);

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
              label="About"
              labelStyle={{ color: "#ffd453" }}
              onPress={() => props.navigation.navigate("AboutScreen")}
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
              loading={loading}
              onPress={() => {}}
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
