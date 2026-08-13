import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import ArticlesPage from './ArticlesPage';


const meta = {
    component: ArticlesPage,
    title: 'enteties/ArticlesPage',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
