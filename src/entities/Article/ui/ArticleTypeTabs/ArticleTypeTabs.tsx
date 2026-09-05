import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleTypeTabs.module.scss";
import {TabItem, Tabs} from "shared/ui/Tabs/Tabs";
import {useCallback, useMemo} from "react";
import {ArticleType} from "entities/Article";
import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {getArticlePageType} from "pages/ArticlesPage/model/selectors/getArticlePageType/getArticlePageType";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const {className, value, onChangeType} = props;

    const typeTabs = useMemo<TabItem[]>(() => {
        return [
            {
                value: ArticleType.ALL,
                content: 'Все'
            },
            {
                value: ArticleType.IT,
                content: 'Айти'
            },
            {
                value: ArticleType.ECONOMICS,
                content: 'Экономика'
            },
            {
                value: ArticleType.SCIENCE,
                content: 'Наука'
            }
        ]
    }, [])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])


    return (
        <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} className={classNames(cls.ArticleTypeTabs, {}, [className])}/>
    );
};
