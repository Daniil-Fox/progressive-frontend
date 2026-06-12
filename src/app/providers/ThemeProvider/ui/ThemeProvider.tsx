import { ReactNode, useState } from "react";
import {
    LOCALSTORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "shared/lib/theme/ThemeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const defaultTheme =
    (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.DARK;

    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const switchTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    };
    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
