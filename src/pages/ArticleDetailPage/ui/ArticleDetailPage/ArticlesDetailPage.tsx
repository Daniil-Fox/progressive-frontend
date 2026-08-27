import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesDetailPage.module.scss";
import {ArticleDetails} from "entities/Article";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CommentList} from "entities/Comment";
import {Button, Text} from "shared/ui";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {
    articleDetailsSelectors,
    getArticleComments
} from "./../../model/slice/articleDetailsCommentsSlice";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {
    fetchCommentsByArticleId
} from "./../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {AddCommentForm} from "features/addCommentForm";
import {useCallback} from "react";
import {addCommentForArticle} from "./../../model/services/addCommentForArticle/addCommentForArticle";
import {ButtonTheme} from "shared/ui/Button/Button";
import {pathRoutes} from "app/routes/config/routes";

export interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({className}: ArticlesDetailPageProps) => {
    const { id } = useParams<{id: string}>()
    const {t} = useTranslation('article-details')
    const comments = useAppSelector(getArticleComments.selectAll)
    const isLoading = useAppSelector(articleDetailsSelectors.getIsLoading)
    const error = useAppSelector(articleDetailsSelectors.getError)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    const onBackToList = () => {
        navigate(pathRoutes.articles)
    }

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if(!id){
        return (
            <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
                {t('Article is not found')}
            </div>
        )
    }



    return (
        <div className={classNames(cls.ArticlesDetailPage, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t("back to list")}
            </Button>
            <ArticleDetails id={id}/>

            <Text title={"Комментарии"} className={cls.commentTitle}/>
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList comments={comments} isLoading={isLoading}/>
        </div>
    );
};

export default ArticlesDetailPage;