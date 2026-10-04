import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesDetailPage.module.scss";
import {ArticleDetails} from "entities/Article";
import {useParams} from "react-router-dom";
import {Text} from "shared/ui";

import {Page} from "widgets/Page";
import {ArticleDetailsPageHeader} from "./../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import {VStack} from "shared/ui/Stack";
import {ArticleRecommendationsList} from "features/articleRecommendationsList";
import {ArticleDetailComments} from "./../ArticleDetailComments/ArticleDetailComments";

export interface ArticlesDetailPageProps {
    className?: string;
}

const ArticlesDetailPage = ({className}: ArticlesDetailPageProps) => {
    const { id } = useParams<{id: string}>()
    return (
        <Page className={classNames(cls.ArticlesDetailPage, {}, [className])}>
            <VStack gap={'32'}>
                <VStack gap={'16'}>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                </VStack>
                <ArticleRecommendationsList/>
                <VStack gap={'32'}>
                    <Text title={"Комментарии"}/>
                    <VStack gap={'16'}>
                        <ArticleDetailComments id={id}/>
                    </VStack>
                </VStack>
            </VStack>
        </Page>
    );
};

export default ArticlesDetailPage;