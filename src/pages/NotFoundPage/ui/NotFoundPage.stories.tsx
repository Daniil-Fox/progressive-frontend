import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {NotFoundPage} from "./NotFoundPage";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/lib/theme/ThemeContext";


const meta = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof NotFoundPage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {

    }
}
export const Light: Story = {
    args: {

    }
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]