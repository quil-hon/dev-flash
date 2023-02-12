import React from "react";
import { Image } from "react-native";
import { useTheme } from "styled-components/native";

const urlBase = "https://image-base/";

export interface FilmLabelProps {
  model: string;
  width?: number;
  height?: number;
}

const FilmLabel: React.FC<FilmLabelProps> = ({ model, width, height }) => {
  const theme = useTheme();
  return (
    <Image
      soruce={{ uri: `${urlBase}${model}` }}
      style={{
        width: width ?? theme.space[14],
        height: height ?? theme.space[14],
      }}
    />
  );
};

export default FilmLabel;
