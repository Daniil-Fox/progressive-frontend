import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesPageFilters.module.scss";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {articlePageActions} from "./../../model/slices/articlesPageSlice";
import {getView} from "./../../model/selectors/getView/getView";
import {ArticleSortSelector, ArticlesSortField, ArticleView, ArticleViewSelector} from "entities/Article";
import {useCallback, useMemo} from "react";
import {Select} from "shared/ui/Select/Select";
import {Card} from "shared/ui/Card/Card";
import {Input} from "shared/ui";
import {getArticlePageOrder} from "./../../model/selectors/getArticlesOrder/getArticlesOrder";
import {getArticlePageSort} from "../../model/selectors/getSort/getArticlePageSort";
import {SortOrder} from "shared/types/SortOrder";
import {getArticlePageSearch} from "./../../model/selectors/getArticlesSearch/getArticlesSearch";
import {fetchArticlesList} from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import {useDebounce} from "shared/lib/hooks/useDebounce/useDebounce";
import {TabItem, Tabs} from "shared/ui/Tabs/Tabs";
import {ArticleType} from "entities/Article/model/types/article";
import {getArticlePageType} from "pages/ArticlesPage/model/selectors/getArticlePageType/getArticlePageType";
import {ArticleTypeTabs} from "entities/Article";

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = ({className}: ArticlesPageFiltersProps) => {
    const view = useAppSelector(getView)
    const dispatch = useAppDispatch()
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])
    const type = useAppSelector(getArticlePageType)
    const sort = useAppSelector(getArticlePageSort)
    const order = useAppSelector(getArticlePageOrder)
    const search = useAppSelector(getArticlePageSearch)


    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}))
    }, [dispatch])

    const debouncedFetchData = useDebounce(fetchData, 500)

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeSort = useCallback((newSort: ArticlesSortField) => {
        dispatch(articlePageActions.setSort(newSort))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlePageActions.setSearch(value))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])


    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageActions.setType(value))
        dispatch(articlePageActions.setPage(1))
        debouncedFetchData()
    }, [dispatch, debouncedFetchData])


    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector sort={sort} order={order} onChangeSort={onChangeSort} onChangeOrder={onChangeOrder} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input value={search} onChange={onChangeSearch} placeholder={'Поиск'}/>
            </Card>
            <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />
        </div>
    );
};
