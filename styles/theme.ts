import { range } from "../utils/range";

const base = 4;
const sizes = [];
for (const size of range(96)) {
  sizes.push(size * base);
}

export const lightTheme = {
  shadows: {
    medium: [
      {
        shadowColor: "#000",
        shadowOffset: { x: 0, y: 3 },
        shadowRadius: 6,
        shadowOpacity: 8,
      },
    ],
  },
  typography: {
    heading: {
      1: {
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 48,
      },
      2: {
        fontSize: 33,
        fontWeight: 700,
        lineHeight: 40,
      },
      3: {
        fontSize: 27,
        fontWeight: "normal",
        lineHeight: 32,
      },
      4: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 24,
      },
      5: {
        fontSize: 20,
        fontWeight: "normal",
        lineHeight: 24,
      },
      6: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19,
      },
    },
    body: {
      fontFamily: "",
    },
  },
  colors: {
    background: "#F5F5F5",
    primary: {
      50: "#6D8C83",
      100: "#0B3F30",
      200: "#07261D",
    },
    secondary: {
      50: "#F1CB93",
      100: "#E39828",
      200: "#A5752D",
    },
    dark: {
      50: "#AEAEB0",
      100: "#6B6B76",
      200: "#18181B",
    },
    white: {
      50: "#FFF",
      100: "#F1F1F5",
      200: "#EAEAF1",
    },
    error: {
      50: "#F29A7F",
      100: "#EA572A",
      200: "#AC401F",
    },
  },
  space: sizes,
};

export type AppTheme = typeof lightTheme;
