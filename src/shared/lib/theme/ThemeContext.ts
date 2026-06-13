import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme: Theme;
  switchTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.DARK,
});

export const LOCALSTORAGE_THEME_KEY = "app-theme";
