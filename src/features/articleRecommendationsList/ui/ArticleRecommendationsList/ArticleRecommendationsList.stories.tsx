import {Meta, StoryObj} from "@storybook/react-webpack5";
import {ArticleRecommendationsList} from "./ArticleRecommendationsList";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import {http, HttpResponse} from "msw";
import {mockArticles} from "@/entities/Article/model/mocks/mockArticle";

const meta: Meta<typeof ArticleRecommendationsList> = {
    component: ArticleRecommendationsList,
    title: 'features/ArticleRecommendationsList',
    args: {},
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({}),
    ],
}

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                http.get('/articles', () => {
                    return HttpResponse.json(mockArticles);
                }),
            ],
        },
    },
}

export const Empty: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                http.get('/articles', () => {
                    return HttpResponse.json([]);
                }),
            ],
        },
    },
}
