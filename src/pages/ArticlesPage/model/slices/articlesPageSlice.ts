import {createEntityAdapter, createSlice, PayloadAction, WithSlice} from "@reduxjs/toolkit";
import {rootReducer} from "app/providers/StoreProvider/config/rootReducer";
import {RootState} from "app/providers/StoreProvider";
import {Article, ArticlesSortField, ArticleType, ArticleView} from "entities/Article";
import {ArticlesPageSchema} from "../types/articlesPageSchema";
import {fetchArticlesList} from "./../services/fetchArticlesList/fetchArticlesList";
import {ARTICLES_VIEW_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {SortOrder} from "shared/types/SortOrder";


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
        hasMore: true,
        _inited: false,
        sort: ArticlesSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, JSON.stringify(action.payload));
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticlesSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: state => {
            const viewFromStorage = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY);
            const view = viewFromStorage
                ? JSON.parse(viewFromStorage) as ArticleView
                : ArticleView.SMALL;
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true

                if(action.meta.arg.replace){
                    articlesAdapter.removeAll(state)
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasMore = action.payload.length >= (state.limit ?? 0)

                if(action.meta.arg.replace){
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
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

