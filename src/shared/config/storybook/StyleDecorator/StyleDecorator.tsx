import 'app/style/index.scss'
import {PartialStoryFn} from "storybook/internal/csf";


export const StyleDecorator = (Story:  PartialStoryFn) => {
    return <Story />;
};