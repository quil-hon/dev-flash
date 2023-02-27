import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";
import Badge from "../components/Badge";
import BodyText from "../components/BodyText";
import { Heading2 } from "../components/Headings";
import { HStack, VStack } from "../components/Stack";
import Layout from "../components/Layout";
import Process from "../models/Process";

import { RootStackScreenProps } from "../types";
import ProcessListItem from "../components/ProcessList/ProcessListItem";

export default function ProcessesScreen({
  route,
  navigation,
}: RootStackScreenProps<"Processes">) {
  const { space, colors } = useTheme();

  const { filmId } = route.params;

  const film = {
    id: "1",
    model: "HP5+",
    brand: "ILFORD",
    iso: 400,
    isNegative: true,
    isBlackAndWhite: true,
    numberOfProcess: 4,
  };

  const processes: Process[] = [
    {
      id: "1",
      filmId: "1",
      description: "HC-110",
      targetSpeed: 400,
      steps: [
        {
          id: "1",
          processId: "1",
          chemicalDilutionId: "1",
          timerId: "1",
          description: "Developer",
          temperature: 20,
        },
      ],
    },
  ];

  return (
    <VStack>
      <Layout style={{ marginBottom: space[7] }}>
        <VStack>
          <Heading2 style={{ paddingBottom: space[1] }}>{film.model}</Heading2>
          <HStack style={{ marginBottom: space[2] }}>
            <Badge size="small" style={{ marginRight: space[2] }}>
              {film.isBlackAndWhite ? "B&W" : "Color"}
            </Badge>
            <Badge size="small">
              {film.isNegative ? "navigative" : "positive"}
            </Badge>
          </HStack>
          <View style={{ marginBottom: space[1] }}>
            <BodyText size="x-small" style={{ color: colors.dark[50] }}>
              Brand
            </BodyText>
            <BodyText>{film.brand}</BodyText>
          </View>
          <View>
            <BodyText size="x-small" style={{ color: colors.dark[50] }}>
              ISO
            </BodyText>
            <BodyText>{film.iso}</BodyText>
          </View>
        </VStack>
      </Layout>
      <ScrollView>
        {processes.map((p) => (
          <ProcessListItem key={p.id} process={p} />
        ))}
      </ScrollView>
    </VStack>
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
