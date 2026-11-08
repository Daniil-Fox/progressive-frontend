import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Popover} from './Popover';
import {Button} from "@/shared/ui";

const meta = {
    component: Popover,
    title: 'shared/Popover',
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        children: <div>Содержимое popover</div>,
        trigger: <Button>Открыть</Button>,
    },
};
