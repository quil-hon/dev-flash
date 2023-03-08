import React from "react";
import { Pressable, PressableProps, View, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";
import TextBody from "../BodyText";
import Card from "../Card";
import { Heading4 } from "../Headings";
import { CaretRightIcon } from "../Icons";
import { HStack, VStack } from "../Stack";
import FilmLabel from "./FilmLabel";

export type FilmListItemProps = {
  model: string;
  brand: string;
  speed: number;
  isNegative?: boolean | null;
  isColor?: boolean | null;
  badgeCount?: number;
} & ViewProps &
  Pick<PressableProps, "onPress">;

export default function FilmListItem({
  model,
  brand,
  speed,
  isNegative,
  isColor,
  badgeCount,
  style,
  onPress,
}: FilmListItemProps) {
  const { space } = useTheme();
  return (
    <Card style={{ padding: space[4], ...(style as object) }}>
      <Pressable onPress={onPress}>
        <HStack style={{ justifyContent: "space-between" }}>
          <HStack>
            <FilmLabel
              model={model}
              badgeCount={badgeCount}
              style={{ marginRight: space[4] }}
            />
            <VStack>
              <Heading4 style={{ marginBottom: space[1] }}>{model}</Heading4>
              <TextBody size="small">
                {brand}, ISO{speed}, {isNegative ? "[-]" : ""}
                {isColor ? "B&W" : "Color"}
              </TextBody>
            </VStack>
          </HStack>
          <View style={{ alignSelf: "center" }}>
            <CaretRightIcon />
          </View>
        </HStack>
      </Pressable>
    </Card>
  );
}
