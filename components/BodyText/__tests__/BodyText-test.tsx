import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components/native";
import { lightTheme } from "../../../styles/theme";
import BodyText from "../BodyText";

test("renders normal BodyText", () => {
  const component = (
    <ThemeProvider theme={lightTheme}>
      <BodyText>This is normal body text</BodyText>
    </ThemeProvider>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders small size BodyText", () => {
  const component = (
    <ThemeProvider theme={lightTheme}>
      <BodyText size="small">This is small body text</BodyText>
    </ThemeProvider>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders x-small size BodyText", () => {
  const component = (
    <ThemeProvider theme={lightTheme}>
      <BodyText size="x-small">This is x-small body text</BodyText>
    </ThemeProvider>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
