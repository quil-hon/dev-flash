import React from "react";

import styled from "styled-components/native";
import TextBody, { TextBodyProps } from "../BodyText";

interface BadgeProps {
  size?: Pick<TextBodyProps, "size">;
}

const Badge = styled(TextBody)<BadgeProps>`
  background-color: ${(props) => props.theme.colors.secondary[100]}
  border-radius: ${({ size }) => (size === "small" ? 10 : 12)};
  padding-horizontal: ${({ size }) => (size === "small" ? 8 : 10)};
`;

export default Badge;
