import {Meta, StoryObj} from "@storybook/react-webpack5";
import {ArticleRecommendationsList} from "./ArticleRecommendationsList";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {Article, ArticleType} from "entities/Article";
import {http, HttpResponse} from "msw";

const meta: Meta = {
    component: ArticleRecommendationsList,
    title: 'features/ArticleRecommendationsList',
    args: {},
    tags: ['autodocs'],
    decorators: [
        StoreDecorator({}),
    ]
}

export default meta;
type Story = StoryObj<typeof meta>


const article: Article = {
    createdAt: '23.05.2024',
    title: 'Заголовок статьи',
    type: [ArticleType.IT],
    img: '',
    id: '123',
    blocks: [],
    subtitle: 'Подзаголовок',
    user: {
        username: 'User',
        avatar: '',
        id: '1'
    },
    views: 123
}

export const Default: Story = {
    args: {},
    parameters: {
        msw: {
            handlers: [
                http.get('/articles?_limit=3', () => {
                    return HttpResponse.json([
                        {...article, id: '1'},
                        {...article, id: '2'},
                        {...article, id: '3'},
                    ]);
                }),
            ]
        }
    }
}