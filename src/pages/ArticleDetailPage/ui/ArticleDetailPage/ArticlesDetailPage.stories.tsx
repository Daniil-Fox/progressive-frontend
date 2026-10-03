import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import ArticlesDetailPage from './ArticlesDetailPage';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "shared/lib/theme/ThemeContext";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";


const meta = {
    component: ArticlesDetailPage,
    title: 'pages/ArticlesDetailPage',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlesDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
