import {PartialStoryFn} from "storybook/internal/csf";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "app/routes";

export const RouterDecorator = (Story: PartialStoryFn) => {
    return (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    )
}