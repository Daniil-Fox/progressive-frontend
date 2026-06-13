
import {Theme} from "shared/lib/theme/ThemeContext";
import {PartialStoryFn} from "storybook/internal/csf";
export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn) => {
    return (
        <div className={`app ${theme}`}>
            <Story />
        </div>
    )
}