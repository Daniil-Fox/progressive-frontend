import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetails.module.scss";
import {memo, useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {fetchArticleById} from "./../../model/services/fetchArticleById/fetchArticleById";
import {articleSelectors} from "./../../model/slice/articleDetailsSlice";
import {ArticleBlock, ArticleBlockType} from "./../../model/types/article";
import {Avatar, Text} from "shared/ui";
import {TextSize, TextTheme} from "shared/ui/Text/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import EyeIcon from 'shared/assets/eye.svg'
import CalendarIcon from 'shared/assets/calendar.svg'
import {Icon} from "shared/ui/Icon/Icon";
import {ArticleCodeBlockComponent} from "./../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleTextBlockComponent} from "./../ArticleTextBlockComponent/ArticleTextBlockComponent";
import {ArticleImageBlockComponent} from "./../ArticleImageBlockComponent/ArticleImageBlockComponent";
import {HStack, VStack} from "shared/ui/Stack";

interface ArticleDetailsProps {
    className?: string;
    id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {className, id} = props
    const dispatch = useAppDispatch()
    const isLoading =  useAppSelector(articleSelectors.getIsLoading)
    const error =  useAppSelector(articleSelectors.getError)
    const article =  useAppSelector(articleSelectors.getData)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type){
            case ArticleBlockType.CODE:
                return (
                    <VStack gap="16" className={cls.block}>
                        <ArticleCodeBlockComponent key={block.id} block={block}/>
                    </VStack>
                )
            case ArticleBlockType.TEXT:
                return  (
                    <VStack gap="16" className={cls.block}>
                        <ArticleTextBlockComponent key={block.id} block={block}/>
                    </VStack>
                )
            case ArticleBlockType.IMAGE:
                return (
                    <VStack gap="16" align='center' className={cls.block}>
                        <ArticleImageBlockComponent key={block.id} block={block}/>
                    </VStack>
                )
            default:
                return null
        }
    }, [])

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id))
        }
    }, [id, dispatch])

    if(isLoading){
        return (
            <VStack gap={'16'}>
                <HStack justify={'center'}>
                    <Skeleton width={200} height={200} border={'50%'}/>
                </HStack>
                <Skeleton width={300} height={32}/>
                <Skeleton width={600} height={24}/>
                <Skeleton width={"100%"} height={200}/>
            </VStack>
        )
    }

    if(error){
        return (
            <>
                <Text title={'Something wrong'} text={'Article is not found'} theme={TextTheme.ERROR}/>
            </>
        )
    }

    return (
        <VStack gap={'16'} className={classNames(cls.ArticleDetails, {}, [className])}>
            <HStack justify={'center'}>
                <Avatar
                    size={200}
                    src={article?.img}

                />
            </HStack>
            <Text size={TextSize.L} title={article?.title} text={article?.subtitle}/>

            <HStack gap={'16'}>
                <HStack gap={'4'}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)}/>
                </HStack>
                <HStack gap={'4'}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt}/>
                </HStack>
            </HStack>
            <VStack gap={'32'}>
                {article?.blocks.map(renderBlock)}
            </VStack>
        </VStack>
    );
});
