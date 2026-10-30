import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {StarRating} from './StarRating';


const meta = {
    component: StarRating,
    title: 'entities/StarRating',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
