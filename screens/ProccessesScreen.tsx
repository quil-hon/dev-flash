import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components/native";
import Badge from "../components/Badge";
import BodyText from "../components/BodyText";
import { Heading1, Heading2 } from "../components/Headings";
import { HStack, VStack } from "../components/Stack";
import Layout from "../components/Layout";

import { RootStackScreenProps } from "../types";
import ProcessListItem from "../components/ProcessList/ProcessListItem";
import Film from "../models/Film";

export default function ProcessesScreen({
  route,
  navigation,
}: RootStackScreenProps<"Processes">) {
  const { space, colors } = useTheme();

  const { filmId } = route.params;

  const film: Film = {
    id: "1",
    model: "HP5+",
    brand: "ILFORD",
    speed: 400,
    isNegative: true,
    isColor: true,
    processes: [
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
    ],
  };

  return (
    <VStack>
      <Layout style={{ marginBottom: space[7] }}>
        <Heading1 style={{ marginBottom: space[4] }}>Proccesses</Heading1>
        <HStack>
          <VStack
            style={{
              backgroundColor: colors.primary,
              width: space[24],
              height: space[24],
            }}
          ></VStack>
          <VStack>
            <Heading2 style={{ paddingBottom: space[1] }}>
              {film.model}
            </Heading2>
            <HStack style={{ marginBottom: space[2] }}>
              <Badge size="small" style={{ marginRight: space[2] }}>
                {film.isColor ? "B&W" : "Color"}
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
              <BodyText>{film.speed}</BodyText>
            </View>
          </VStack>
        </HStack>
      </Layout>
      <ScrollView>
        {film.processes.map((p) => (
          <ProcessListItem
            key={p.id}
            process={p}
            onPress={() => {
              navigation.push("Steps", { processId: p.id });
            }}
          />
        ))}
      </ScrollView>
    </VStack>
  );
}
