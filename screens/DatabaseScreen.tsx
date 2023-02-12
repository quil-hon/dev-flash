import React from "react";
import { StyleSheet, View } from "react-native";
import BodyText from "../components/BodyText";

import { RootTabScreenProps } from "../types";

export default function DatabaseScreen({
  navigation,
}: RootTabScreenProps<"Database">) {
  return (
    <View style={styles.container}>
      <BodyText>Tab One</BodyText>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
