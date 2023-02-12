import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "../../../styles/theme";
import Badge from "../Badge";

test("renders normal Badge", () => {
  const component = (
    <ThemeProvider theme={lightTheme}>
      <Badge>normal</Badge>
    </ThemeProvider>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders small size Badge", () => {
  const component = (
    <ThemeProvider theme={lightTheme}>
      <Badge size="small">small</Badge>
    </ThemeProvider>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders x-small size Badge", () => {
  const component = (
    <ThemeProvider theme={lightTheme}>
      <Badge size="x-small">small</Badge>
    </ThemeProvider>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
