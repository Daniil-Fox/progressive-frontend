
import {Theme} from "shared/lib/theme/ThemeContext";
import {PartialStoryFn} from "storybook/internal/csf";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {Decorator} from '@storybook/react-webpack5'

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = context.globals.theme as Theme;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    )
}
