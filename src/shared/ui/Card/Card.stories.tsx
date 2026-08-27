import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {fn} from 'storybook/test';
import {Card} from './Card';
import {Text} from "shared/ui";


const meta = {
    component: Card,
    title: 'shared/Card',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <Text title={'test'} text={'test'}/>
    },
};
