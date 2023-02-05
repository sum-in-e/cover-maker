/* eslint-disable no-restricted-imports */
import { Theme, ThemeOptions } from "@mui/material";
import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  export interface Palette {
    black: Palette["black"];
    white: Palette["white"];
    primary: Palette["primary"];
  }
  export interface PaletteOptions {
    black: PaletteOptions["black"];
    white: PaletteOptions["white"];
    primary: PaletteOptions["primary"];
  }
  export function createTheme(options: ThemeOptions): Theme;
}
