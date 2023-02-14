import styled from "styled-components/native";

export interface VStackProps {
  reverse?: boolean;
}

const VStack = styled.View<VStackProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
`;

export default VStack;
