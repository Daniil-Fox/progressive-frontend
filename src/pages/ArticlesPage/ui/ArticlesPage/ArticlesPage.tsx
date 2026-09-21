import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import {memo, useCallback, useState} from "react";
import {ArticleList, ArticleView, ArticleViewSelector} from "entities/Article";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {articlePageActions, getArticles, getGridScrollState, getListScrollState, getVirtuosoSession} from "./../../model/slices/articlesPageSlice";
import {getIsLoading} from "./../../model/selectors/getIsLoading/getIsLoading";
import {getError} from "./../../model/selectors/getError/getError";
import {getView} from "./../../model/selectors/getView/getView";
import {Page} from "widgets/Page";
import {fetchNextArticlesPage} from "./../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {Text} from "shared/ui";
import {TextTheme} from "shared/ui/Text/Text";
import {initArticlesPage} from "./../../model/services/initArticlesPage/initArticlesPage";
import {ArticlesPageFilters} from "./../ArticlesPageFilters/ArticlesPageFilters";
import {useSearchParams} from "react-router-dom";
import {GridStateSnapshot, StateSnapshot} from "react-virtuoso";

export interface ArticlesPageProps {
    className?: string;
}


const ArticlesPage = ({className}: ArticlesPageProps) => {
    const [scrollParent, setScrollParent] = useState<HTMLElement | null>(null);
    const dispatch = useAppDispatch()
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getIsLoading)
    const error = useAppSelector(getError)
    const view = useAppSelector(getView)
    const listState = useAppSelector(getListScrollState)
    const gridState = useAppSelector(getGridScrollState)
    const sessionKey = useAppSelector(getVirtuosoSession)
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch]);

    const onListStateChange = useCallback((state: StateSnapshot) => {
        dispatch(articlePageActions.setListScrollState(state))
    }, [dispatch])

    const onGridStateChange = useCallback((state: GridStateSnapshot) => {
        dispatch(articlePageActions.setGridScrollState(state))
    }, [dispatch])


    if(error){
        return (
            <Page className={classNames(cls.ArticlesPage, {}, [className])}>
                <Text title={error} theme={TextTheme.ERROR}/>
            </Page>
        )
    }



    return (
        <Page
            ref={setScrollParent}
            restoreScroll={false}
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters/>
            <ArticleList
                scrollParent={scrollParent}
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.list}
                sessionKey={sessionKey}
                listState={listState}
                gridState={gridState}
                onListStateChange={onListStateChange}
                onGridStateChange={onGridStateChange}
            />
        </Page>
    );
};

export default memo(ArticlesPage);