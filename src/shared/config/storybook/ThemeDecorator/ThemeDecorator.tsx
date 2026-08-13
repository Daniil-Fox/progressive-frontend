
import {Theme} from "shared/lib/theme/ThemeContext";
import {PartialStoryFn} from "storybook/internal/csf";
import {ThemeProvider} from "app/providers/ThemeProvider";
export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story />
            </div>
        </ThemeProvider>
    )
}
