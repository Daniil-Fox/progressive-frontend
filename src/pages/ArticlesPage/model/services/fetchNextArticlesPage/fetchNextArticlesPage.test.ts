import {TestAsyncThunk} from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import {fetchNextArticlesPage} from "./fetchNextArticlesPage";
import {fetchArticlesList} from "./../fetchArticlesList/fetchArticlesList";

jest.mock('./../fetchArticlesList/fetchArticlesList')

describe('Fetch Profile Data', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true
            }
        })

        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(4)
        expect(fetchArticlesList).toHaveBeenCalledWith({page: 3})
    })

    test('fetchArticlesList not called with hasMore false', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false
            }
        })

        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })

    test('fetchArticlesList not called with isLoading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasMore: true
            }
        })

        const result = await thunk.callThunk()

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(fetchArticlesList).not.toHaveBeenCalled()
    })
})