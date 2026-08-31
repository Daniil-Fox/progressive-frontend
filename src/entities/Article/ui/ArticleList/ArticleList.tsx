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
    return new Array(view === ArticleView.SMALL ? 9 : 4)
        .fill(0)
        .map((_, index) => (
            <ArticleListItemSkeleton key={index} view={view}/>
        ))
}

export const ArticleList = (props: ArticleListProps) => {
    const { className, isLoading, articles, view = ArticleView.SMALL } = props

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem key={article.id} article={article} view={view}/>
        )
    }


    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null
            }

            {isLoading && getSkeleton(view)}
        </div>
    );
};
