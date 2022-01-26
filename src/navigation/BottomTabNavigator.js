import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import HowToUseScreen from "../screens/HowToUseScreen";

const Tab = createMaterialBottomTabNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#20272e" },
  headerTitleStyle: { color: "#ffd453" },
  headerTintColor: "#ffd453",
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffd453"
      barStyle={{ backgroundColor: "#20272e" }}
      screenOptions={globalScreenOptions}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="HowToUseScreen"
        component={HowToUseScreen}
        options={{
          tabBarLabel: "How To Use",
          tabBarIcon: ({ color }) => (
            <Ionicons name="book-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
