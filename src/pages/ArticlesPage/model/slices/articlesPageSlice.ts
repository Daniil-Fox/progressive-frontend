import {createEntityAdapter, createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";
import {RootState} from "app/providers/StoreProvider";
import {Article, ArticleView} from "entities/Article";
import {ArticlesPageSchema} from "../types/articlesPageSchema";
import {fetchArticlesList} from "./../services/fetchArticlesList/fetchArticlesList";
import {ARTICLES_VIEW_LOCALSTORAGE_KEY} from "shared/const/localstorage";


const articlesAdapter = createEntityAdapter<Article, string>({
    selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<RootState>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
    name: "articlesPage",
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.SMALL,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: state => {
            const viewFromStorage = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
            const view = viewFromStorage
                ? JSON.parse(viewFromStorage) as ArticleView
                : ArticleView.SMALL;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false
                articlesAdapter.addMany(state, action.payload)
                state.hasMore = action.payload.length > 0
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

const injectedArticlesPageSlice = articlesPageSlice.injectInto(rootReducer)

declare module "app/providers/StoreProvider/config/rootReducer" {
    interface LazyLoadedSlices extends WithSlice<typeof articlesPageSlice>{}
}



export const {
    reducer: articlePageReducer,
    actions: articlePageActions,
} = injectedArticlesPageSlice;

