import { AppTheme } from "./theme";

declare module "styled-components/native" {
  // DefaultTheme is a empty interface
  // eslint-disable-next-line
  export interface DefaultTheme extends AppTheme {}
}
