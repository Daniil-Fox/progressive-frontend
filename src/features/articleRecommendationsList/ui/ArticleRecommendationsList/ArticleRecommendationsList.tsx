import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {ArticleList} from "entities/Article";
import {Text} from "shared/ui";
import {VStack} from "shared/ui/Stack";
import {
    useGetArticleRecommendationsListQuery
} from "./../../api/articleRecommendationsApi";

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {data: articles, isLoading, isError} = useGetArticleRecommendationsListQuery(3)

    if(!articles || isError){
        return null
    }
    return (
        <VStack gap={'8'} className={classNames('', {}, [className])}>
            <Text title={t("Рекоммендации")}/>
            <ArticleList target={"_blank"} className={''} isLoading={isLoading} articles={articles} />
        </VStack>
    );
});