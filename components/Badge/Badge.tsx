import React from "react";

import styled from "styled-components/native";
import TextBody, { TextBodyProps } from "../BodyText";

interface BadgeProps {
  size?: Pick<TextBodyProps, "size">;
}

const Badge = styled(TextBody)<BadgeProps>`
  color: ${({ theme }) => theme.colors.white[50]}
  background-color: ${({ theme }) => theme.colors.secondary[100]}
  border-radius: ${({ size }) => (size === "small" ? 12 : 14)};
  overflow: hidden;
  padding-horizontal: ${({ size }) => (size === "small" ? 8 : 12)};
  padding-vertical: ${({ size }) => (size === "small" ? 4 : 12)};
`;

export default Badge;
