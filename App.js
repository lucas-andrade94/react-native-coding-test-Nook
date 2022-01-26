import "react-native-gesture-handler";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import { LogBox } from "react-native";
import _ from "lodash";

import DrawerNavigator from "./src/navigation/DrawerNavigator";

// Show notifications when the app is in the foreground
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

// Ignoring timer warning
LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

export default function App() {
  useEffect(() => {
    // Permission for iOS
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        // Check if we already have permission
        if (statusObj.status !== "granted") {
          // If permission is not there, ask for the same
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        // If permission is still not given throw error
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted");
        }
      })
      .catch((err) => {
        return null;
      });
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({});
