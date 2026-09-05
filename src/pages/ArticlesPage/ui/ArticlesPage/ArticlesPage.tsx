import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import {memo, useCallback} from "react";
import {ArticleList, ArticleView, ArticleViewSelector} from "entities/Article";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {articlePageActions, getArticles} from "./../../model/slices/articlesPageSlice";
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

export interface ArticlesPageProps {
    className?: string;
}


const ArticlesPage = ({className}: ArticlesPageProps) => {

    const dispatch = useAppDispatch()
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getIsLoading)
    const error = useAppSelector(getError)
    const view = useAppSelector(getView)
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch]);



    if(error){
        return (
            <Page className={classNames(cls.ArticlesPage, {}, [className])}>
                <Text title={error} theme={TextTheme.ERROR}/>
            </Page>
        )
    }



    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters/>
            <ArticleList isLoading={isLoading} view={view} articles={articles}/>
        </Page>
    );
};

export default memo(ArticlesPage);