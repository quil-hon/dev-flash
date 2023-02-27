/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Develop: {
            screens: {
              DevelopScreen: "develop",
            },
          },
          Database: {
            screens: {
              DatabaseScreen: "database",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      Processes: "processes/:filmId",
      ProcessCreate: "processes-create",
      ProcessUpdate: "processes-upate/:filmId",
      Steps: "steps/:processId",
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
