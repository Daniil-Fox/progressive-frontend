import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import {memo, useCallback} from "react";
import {Article, ArticleList, ArticleView, ArticleViewSelector} from "entities/Article";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchArticlesList} from "./../../model/services/fetchArticlesList/fetchArticlesList";
import {articlePageActions, articlesPageSelectors, getArticles} from "./../../model/slices/articlesPageSlice";

export interface ArticlesPageProps {
    className?: string;
}


const ArticlesPage = ({className}: ArticlesPageProps) => {

    const dispatch = useAppDispatch()
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(articlesPageSelectors.getIsLoading)
    const error = useAppSelector(articlesPageSelectors.getError)
    const view = useAppSelector(articlesPageSelectors.getView)

    useInitialEffect(() => {
        dispatch(fetchArticlesList())
    })

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view))
    }, [dispatch])

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleViewSelector view={view} onViewClick={onChangeView}/>
            <ArticleList isLoading={isLoading} view={view} articles={articles}/>
        </div>
    );
};

export default memo(ArticlesPage);