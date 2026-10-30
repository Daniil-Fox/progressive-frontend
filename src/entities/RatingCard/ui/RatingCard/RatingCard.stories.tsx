import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {RatingCard} from './RatingCard';


const meta = {
    component: RatingCard,
    title: 'entities/RatingCard',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};
