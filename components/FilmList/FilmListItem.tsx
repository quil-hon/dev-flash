import React from "react";
import TextBody from "../BodyText";
import Card from "../Card";
import { Heading4 } from "../Headings";
import FilmLabel from "./FilmLabel";

export interface FilmListItemProps {
  model: string;
  brand: string;
  iso: number;
  isNegative?: boolean | null;
  isBlackAndWhite?: boolean | null;
}

const FilmListItem: React.FC<FilmListItemProps> = ({
  model,
  brand,
  iso,
  isNegative,
  isBlackAndWhite,
}) => {
  return (
    <Card>
      <FilmLabel model={model} />
      <Heading4>{model}</Heading4>
      <TextBody size="small">
        {brand}, ISO{iso}, {isNegative ? "[-]" : ""},
        {isBlackAndWhite ? "B&W" : "Color"}
      </TextBody>
    </Card>
  );
};

export default FilmListItem;
