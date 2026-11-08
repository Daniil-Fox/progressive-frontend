import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {NotFoundPage} from "./NotFoundPage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    component: NotFoundPage,
    title: 'pages/NotFoundPage',
    tags: ['autodocs'],
    args: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {};
