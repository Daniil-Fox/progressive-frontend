import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import {Article, ArticleView} from "./../../model/types/article";
import {ArticleListItem} from "./../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "entities/Article/ui/ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeleton = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={view} view={view}/>
        ))
}

export const ArticleList = (props: ArticleListProps) => {
    const { className, isLoading, articles, view = ArticleView.SMALL } = props

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} view={view}/>
        )
    }

    if(isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeleton(view)}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null
            }
        </div>
    );
};
