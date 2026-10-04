import {classNames} from "shared/lib/classNames/classNames";
import {AddCommentForm} from "features/addCommentForm";
import {CommentList} from "entities/Comment";
import {Suspense, useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getArticleComments} from "./../../model/slice";
import {selectCommentsError, selectCommentsIsLoading} from "./../../model/selectors/getArticleDetails";
import {addCommentForArticle} from "./../../model/services/addCommentForArticle/addCommentForArticle";
import {
    fetchCommentsByArticleId
} from "pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {VStack} from "shared/ui/Stack";
import {Loader} from "shared/ui";

interface ArticleDetailCommentsProps {
    className?: string;
    id?: string;
}

export const ArticleDetailComments = (props: ArticleDetailCommentsProps) => {
    const {className, id} = props
    const dispatch = useAppDispatch()
    const comments = useAppSelector(getArticleComments.selectAll)

    const isLoading = useAppSelector(selectCommentsIsLoading)
    const error = useAppSelector(selectCommentsError)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && id) {
            dispatch(fetchCommentsByArticleId(id))
        }
    }, [id, dispatch])

    return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader/>}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList comments={comments} isLoading={isLoading}/>
        </VStack>
    );
};
