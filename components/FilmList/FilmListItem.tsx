import React from "react";
import { View, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";
import TextBody from "../BodyText";
import Card from "../Card";
import { Heading4 } from "../Headings";
import CaretRightIcon from "../Icons/CaretRightIcon";
import { HStack, VStack } from "../Stack";
import FilmLabel from "./FilmLabel";

export interface FilmListItemProps extends ViewProps {
  model: string;
  brand: string;
  iso: number;
  isNegative?: boolean | null;
  isBlackAndWhite?: boolean | null;
  badgeCount?: number;
}

const FilmListItem: React.FC<FilmListItemProps> = ({
  model,
  brand,
  iso,
  isNegative,
  isBlackAndWhite,
  badgeCount,
  style,
}) => {
  const { space } = useTheme();
  return (
    <Card style={{ padding: space[4], ...(style as object) }}>
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
              {brand}, ISO{iso}, {isNegative ? "[-]" : ""}
              {isBlackAndWhite ? "B&W" : "Color"}
            </TextBody>
          </VStack>
        </HStack>
        <View style={{ alignSelf: "center" }}>
          <CaretRightIcon />
        </View>
      </HStack>
    </Card>
  );
};

export default FilmListItem;
