import {RatingCard} from "@/entities/RatingCard";
import {useGetArticleRating, useRateArticle} from "./../../api/articleRatingApi";
import {useAppSelector} from "@/shared/lib/store/hooks/hooks";
import {getUserAuthData} from "@/entities/User";
import {Skeleton} from "@/shared/ui/Skeleton/Skeleton";
import {useCallback} from "react";

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = (props: ArticleRatingProps) => {
    const {articleId} = props;
    const userData = useAppSelector(getUserAuthData)
    const {data, isLoading} = useGetArticleRating({
        userId: userData?.id ?? '',
        articleId,
    })

    const [rateArticleMutation] = useRateArticle()


    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                userId: userData?.id ?? '',
                articleId,
                rate: starsCount,
                feedback: feedback
            })
        } catch {
            // some handling error
        }
    }, [articleId, rateArticleMutation, userData?.id])

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount)
    }, [handleRateArticle])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback)
    }, [handleRateArticle])

    if(isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    const rating = data?.[0]

    return (
        <RatingCard
            title={'Оцените статью'}
            feedbackTitle={'Оставьте отзыв о статье'}
            rate={rating?.rate}
            onCancel={onCancel}
            onAccept={onAccept}
            hasFeedback
        />
    );
};
