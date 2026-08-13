import {ReactNode, useMemo, useState} from "react";

import {
    LOCALSTORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "shared/lib/theme/ThemeContext";

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}



export const ThemeProvider = (props: ThemeProviderProps) => {
    const {children, initialTheme} = props;
    const defaultTheme =
    (localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme) || Theme.DARK;
    document.body.classList = defaultTheme
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    const switchTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        document.body.classList = newTheme
        localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
    };

    const themeValue = useMemo(() => ({theme, switchTheme}), [theme])

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};
