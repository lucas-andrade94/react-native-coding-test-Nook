import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";

import { LogBox } from "react-native";
import _ from "lodash";

import DrawerNavigator from "./src/navigation/DrawerNavigator";

// Ignoring timer warning
LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
