import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#20272e" },
  headerTitleStyle: { color: "#ffd453" },
  headerTintColor: "#ffd453",
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={globalScreenOptions}
    >
      <Drawer.Screen name="Jokes" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
