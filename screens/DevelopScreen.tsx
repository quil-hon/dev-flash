import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { FilmListItem } from "../components/FilmList";

import { RootTabScreenProps } from "../types";

export default function DevelopScreen({
  navigation,
}: RootTabScreenProps<"Develop">) {
  const data = [
    {
      model: "HP5+",
      brand: "ILFORD",
      iso: 400,
      isNegative: true,
      isBlackAndWhite: true,
    },
    {
      model: "T-Max",
      brand: "Kodak",
      iso: 400,
      isNegative: true,
      isBlackAndWhite: true,
    },
  ];
  return (
    <ScrollView>
      {data.map((d) => (
        <FilmListItem key={d.model} {...d} />
      ))}
    </ScrollView>
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
