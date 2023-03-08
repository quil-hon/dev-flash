import React from "react";
import { Image, View, ViewProps } from "react-native";
import { useTheme } from "styled-components/native";
import Badge from "../Badge";

const urlBase = "https://image-base/";

export interface FilmLabelProps extends ViewProps {
  model: string;
  width?: number;
  height?: number;
  badgeCount?: number;
}

const FilmLabel: React.FC<FilmLabelProps> = ({
  model,
  width,
  height,
  badgeCount,
  style,
}) => {
  const theme = useTheme();
  return (
    <View style={style}>
      {typeof badgeCount === "number" && (
        <Badge
          style={{
            position: "absolute",
            top: -theme.space[1],
            right: -theme.space[1],
            zIndex: 2,
          }}
          size="small"
        >
          {badgeCount}
        </Badge>
      )}
      <Image
        soruce={{ uri: `${urlBase}${model}` }}
        style={{
          backgroundColor: theme.colors.primary[100],
          width: width ?? theme.space[14],
          height: height ?? theme.space[14],
          borderRadius: theme.space[3],
        }}
      />
    </View>
  );
};

export default FilmLabel;
