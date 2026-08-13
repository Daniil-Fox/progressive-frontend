import { createContext } from "react";

export enum Theme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
}

interface ThemeContextProps {
  theme: Theme;
  switchTheme?: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.DARK,
});

export const LOCALSTORAGE_THEME_KEY = "app-theme";
