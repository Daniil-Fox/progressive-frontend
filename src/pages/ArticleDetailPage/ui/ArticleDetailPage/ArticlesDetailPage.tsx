import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesDetailPage.module.scss";
import {ArticleDetails, ArticleList} from "entities/Article";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CommentList} from "entities/Comment";
import {Button, Text} from "shared/ui";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {
    getArticleComments,
    getArticleRecommendations,
} from "../../model/slice";
import {
    fetchCommentsByArticleId
} from "./../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {AddCommentForm} from "features/addCommentForm";
import {useCallback, useEffect} from "react";
import {addCommentForArticle} from "./../../model/services/addCommentForArticle/addCommentForArticle";
import {ButtonTheme} from "shared/ui/Button/Button";
import {pathRoutes} from "app/routes/config/routes";
import {Page} from "widgets/Page";
import {
    fetchArticlesRecommendations
} from "./../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import {
    selectCommentsError,
    selectCommentsIsLoading,
    selectRecommendationsError,
    selectRecommendationsIsLoading
} from "./../../model/selectors/getArticleDetails";
import {ArticleDetailsPageHeader} from "./../ArticleDetailsPageHeader/ArticleDetailsPageHeader";

export interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({className}: ArticlesDetailPageProps) => {
    const { id } = useParams<{id: string}>()
    const {t} = useTranslation('article-details')
    const comments = useAppSelector(getArticleComments.selectAll)
    const recommendations = useAppSelector(getArticleRecommendations.selectAll)

    const isLoading = useAppSelector(selectCommentsIsLoading)
    const error = useAppSelector(selectCommentsError)

    const recommendationsIsLoading = useAppSelector(selectRecommendationsIsLoading)
    const recommendationsError = useAppSelector(selectRecommendationsError)

    const dispatch = useAppDispatch()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])



    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && id) {
            dispatch(fetchCommentsByArticleId(id))
            dispatch(fetchArticlesRecommendations())
        }
    }, [id, dispatch])

    if(!id){
        return (
            <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
                {t('Article is not found')}
            </Page>
        )
    }



    return (
        <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
            <ArticleDetailsPageHeader/>
            <ArticleDetails id={id}/>

            <Text title={"Рекоммендации"} className={cls.commentTitle}/>
            <ArticleList target={"_blank"} className={cls.recommendationList} articles={recommendations} isLoading={recommendationsIsLoading}/>

            <Text title={"Комментарии"} className={cls.commentTitle}/>
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={isLoading}/>
        </Page>
    );
};

export default ArticlesDetailPage;