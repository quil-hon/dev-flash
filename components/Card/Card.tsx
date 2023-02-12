import React from "react";
import styled from "styled-components/native";

export const Card = styled.View`
  border-radius: 28;
  background-color: ${(props) => props.theme.colors.white[50]};
`;

export default Card;
