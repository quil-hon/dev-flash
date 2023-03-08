import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components/native";
import { FilmListItem } from "../components/FilmList";
import { Heading1 } from "../components/Headings";
import Layout from "../components/Layout";
import Film from "../models/Film";

import { RootTabScreenProps } from "../types";

export default function DevelopScreen({
  navigation,
}: RootTabScreenProps<"Develop">) {
  const insets = useSafeAreaInsets();
  const { space } = useTheme();

  const data: Film[] = [
    {
      id: "1",
      model: "HP5+",
      brand: "ILFORD",
      speed: 400,
      isNegative: true,
      isColor: true,
      processes: [],
    },
    {
      id: "2",
      model: "T-Max",
      brand: "Kodak",
      speed: 400,
      isNegative: true,
      isColor: true,
      processes: [],
    },
  ];
  return (
    <Layout style={{ paddingTop: insets.top }}>
      <Heading1 style={{ marginBottom: space[4] }}>Films</Heading1>
      <ScrollView>
        {data.map((d) => (
          <FilmListItem
            key={d.id}
            style={{ marginBottom: space[6] }}
            {...d}
            badgeCount={d.processes.length}
            onPress={() => {
              navigation.push("Processes", {
                filmId: d.id,
              });
            }}
          />
        ))}
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({});
