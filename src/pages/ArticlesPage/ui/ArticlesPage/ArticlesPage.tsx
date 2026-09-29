import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import {memo, useCallback, useState} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {getError} from "./../../model/selectors/getError/getError";
import {Page} from "widgets/Page";
import {fetchNextArticlesPage} from "./../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {Text} from "shared/ui";
import {TextTheme} from "shared/ui/Text/Text";
import {initArticlesPage} from "./../../model/services/initArticlesPage/initArticlesPage";
import {ArticlesPageFilters} from "./../ArticlesPageFilters/ArticlesPageFilters";
import {useSearchParams} from "react-router-dom";
import {ArticlesInfiniteList} from "pages/ArticlesPage/ui/ArticlesInfiniteList/ArticlesInfiniteList";

export interface ArticlesPageProps {
    className?: string;
}


const ArticlesPage = ({className}: ArticlesPageProps) => {
    const [scrollParent, setScrollParent] = useState<HTMLElement | null>(null);
    const dispatch = useAppDispatch()
    const error = useAppSelector(getError)

    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    })

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch]);



    if(error){
        return (
            <Page className={classNames(cls.ArticlesPage, {}, [className])}>
                <Text title={error} theme={TextTheme.ERROR}/>
            </Page>
        )
    }


    return (
        <Page
            ref={setScrollParent}
            restoreScroll={false}
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters/>
            <ArticlesInfiniteList scrollParent={scrollParent}/>
        </Page>
    );
};

export default memo(ArticlesPage);