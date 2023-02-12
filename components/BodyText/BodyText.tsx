import { TextStyle } from "react-native";
import styled from "styled-components/native";

export interface TextBodyProps {
  size?: "normal" | "small" | "x-small";
  variant?: "normal" | "strong" | "highlight";
}

const sizeToFontSize = {
  normal: 16,
  small: 14,
  "x-small": 11,
};

const sizeToLineHeight = {
  normal: 20,
  small: 16,
  "x-small": 14,
};

export const TextBody = styled.Text<TextBodyProps>`
  color: ${(props) => props.theme.colors.dark[200]};
  font-weight: ${(props) =>
    props.variant === "strong"
      ? "700"
      : (props.style as TextStyle)?.fontWeight ?? "normal"};
  font-style: ${(props) =>
    props.variant === "highlight"
      ? "italic"
      : (props.style as TextStyle)?.fontStyle ?? "normal"};
  font-size: ${(props) => sizeToFontSize[props.size ?? "normal"]};
  line-height: ${(props) => sizeToLineHeight[props.size ?? "normal"]};
`;

export default TextBody;
