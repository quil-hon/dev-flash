import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";
import Badge from "../components/Badge";
import BodyText from "../components/BodyText";
import { Heading1, Heading2 } from "../components/Headings";
import { HStack, VStack } from "../components/Stack";
import Layout from "../components/Layout";
import Process from "../models/Process";

import { RootStackScreenProps } from "../types";
import ProcessListItem from "../components/ProcessList/ProcessListItem";
import { TextButton } from "../components/Buttons/Buttons";

export default function StepsScreen({
  route,
  navigation,
}: RootStackScreenProps<"Steps">) {
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
    <Layout>
      <VStack>
        <Heading1 style={{ paddingBottom: space[4] }}>Steps</Heading1>
        <HStack></HStack>
      </VStack>
      <HStack>
        <TextButton>Stop</TextButton>
        <TextButton>500ml</TextButton>
      </HStack>
      <ScrollView>
        {processes.map((p) => (
          <ProcessListItem key={p.id} process={p} />
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
