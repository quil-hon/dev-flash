import styled from "styled-components/native";

export interface HStackProps {
  reverse?: boolean;
}

const HStack = styled.View<HStackProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
`;

export default HStack;
