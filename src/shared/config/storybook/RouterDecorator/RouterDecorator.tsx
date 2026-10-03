import {PartialStoryFn} from "storybook/internal/csf";
import {BrowserRouter} from "react-router-dom";

export const RouterDecorator = (StoryComponent: PartialStoryFn) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}