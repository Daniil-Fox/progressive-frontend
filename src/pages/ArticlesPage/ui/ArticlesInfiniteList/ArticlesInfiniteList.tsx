import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesInfiniteList.module.scss";
import {ArticleList} from "entities/Article";
import {useCallback, useState} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {
    articlePageActions,
    getArticles,
    getGridScrollState,
    getListScrollState,
    getVirtuosoSession
} from "./../../model/slices/articlesPageSlice";
import {getIsLoading} from "./../../model/selectors/getIsLoading/getIsLoading";
import {getView} from "./../../model/selectors/getView/getView";
import {GridStateSnapshot, StateSnapshot} from "react-virtuoso";

interface ArticlesInfiniteListProps {
    className?: string;
    scrollParent: HTMLElement | null;
}

export const ArticlesInfiniteList = ({className, scrollParent}: ArticlesInfiniteListProps) => {
    const dispatch = useAppDispatch()
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getIsLoading)
    const view = useAppSelector(getView)
    const listState = useAppSelector(getListScrollState)
    const gridState = useAppSelector(getGridScrollState)
    const sessionKey = useAppSelector(getVirtuosoSession)

    const onListStateChange = useCallback((state: StateSnapshot) => {
        dispatch(articlePageActions.setListScrollState(state))
    }, [dispatch])

    const onGridStateChange = useCallback((state: GridStateSnapshot) => {
        dispatch(articlePageActions.setGridScrollState(state))
    }, [dispatch])

    return (
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
    );
};
