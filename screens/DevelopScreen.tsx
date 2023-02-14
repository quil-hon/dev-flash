import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import { FilmListItem } from "../components/FilmList";
import Layout from "../components/Layout";

import { RootTabScreenProps } from "../types";

export default function DevelopScreen({
  navigation,
}: RootTabScreenProps<"Develop">) {
  const { space } = useTheme();

  const data = [
    {
      model: "HP5+",
      brand: "ILFORD",
      iso: 400,
      isNegative: true,
      isBlackAndWhite: true,
      numberOfProcess: 4,
    },
    {
      model: "T-Max",
      brand: "Kodak",
      iso: 400,
      isNegative: true,
      isBlackAndWhite: true,
      numberOfProcess: 2,
    },
  ];
  return (
    <Layout>
      <ScrollView>
        {data.map((d) => (
          <FilmListItem
            key={d.model}
            style={{ marginBottom: space[6] }}
            {...d}
            badgeCount={d.numberOfProcess}
          />
        ))}
      </ScrollView>
    </Layout>
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
