import type {Meta, StoryObj} from '@storybook/react-webpack5';
import MainPage from "./MainPage";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    component: MainPage,
    title: 'pages/MainPage',
    tags: ['autodocs'],
    args: {},
    decorators: [StoreDecorator({})],
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Page: Story = {};
