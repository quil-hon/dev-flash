import React from "react";
import { View, ViewProps } from "react-native";
import styled from "styled-components/native";
import LayoutStats from "../../constants/Layout";

// export interface LayoutProps {
//
// }

const InnerLayout = styled.View`
  width: ${({ theme }) => theme.space[84]};
`;

const Layout = ({ children, style }: ViewProps) => (
  <View
    style={{
      width: LayoutStats.window.width,
      display: "flex",
      alignItems: "center",
      ...(style as object),
    }}
  >
    <InnerLayout>{children}</InnerLayout>
  </View>
);

export default Layout;
