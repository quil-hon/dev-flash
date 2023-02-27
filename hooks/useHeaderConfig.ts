import { DefaultTheme } from "styled-components/native";

export default function useHeaderConfig({
  typography,
}: DefaultTheme): ScreenOptions {
  return {
    headerTitleAlign: "left",
    headerTitleStyle: {
      fontSize: typography.heading[1].fontSize,
      // fontWeight:  typography.heading[1].fontWeight,
      lineHeight: typography.heading[1].lineHeight,
    },
  };
}
