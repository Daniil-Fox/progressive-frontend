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
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";

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
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>
            case ArticleBlockType.TEXT:
                return  <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>
            default:
                return null
        }
    }, [])

    useInitialEffect(() => {
        dispatch(fetchArticleById(id))
    })

    if(isLoading){
        return (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={"100%"} height={200}/>
            </>
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
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            <Avatar
                size={200}
                src={article?.img}
                className={cls.avatar}
            />
            <Text className={cls.title} size={TextSize.L} title={article?.title} text={article?.subtitle}/>

            <div>
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt}/>
                </div>
            </div>

            {article?.blocks.map(renderBlock)}
        </div>
    );
});
