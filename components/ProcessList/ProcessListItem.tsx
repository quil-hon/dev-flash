import React from "react";
import { Pressable, PressableProps, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";
import Process from "../../models/Process";
import Badge from "../Badge";
import BodyText from "../BodyText";
import { Heading4 } from "../Headings";
import { HStack, VStack } from "../Stack";
import LayoutStats from "../../constants/Layout";
import styled from "styled-components/native";

const TemperatureWrapper = styled.View``;

export type FilmListItemProps = {
  process: Process;
} & ViewProps &
  Pick<PressableProps, "onPress">;

export default function ProcessListItem({
  process,
  onPress,
}: FilmListItemProps) {
  const { space } = useTheme();

  const developerModel = "Kodak HC-110";
  const developerTemperature = "20";
  return (
    <Pressable
      style={{
        width: LayoutStats.window.width,
        display: "flex",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <HStack
        style={{
          paddingTop: space[2],
          paddingBottom: space[4],
          width: space[84],
        }}
      >
        <VStack
          style={{
            flexGrow: 2,
          }}
        >
          <Heading4
            style={{
              marginBottom: space[1],
            }}
          >
            {process.description}
          </Heading4>
          <BodyText>
            {developerModel}, ISO{process.targetSpeed}
          </BodyText>
        </VStack>
        <TemperatureWrapper>
          <Badge size="small">{developerTemperature}°C</Badge>
        </TemperatureWrapper>
      </HStack>
    </Pressable>
  );
}
