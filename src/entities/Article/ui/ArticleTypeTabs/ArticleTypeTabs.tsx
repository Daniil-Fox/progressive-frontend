import {classNames} from "@/shared/lib/classNames/classNames";
import cls from "./ArticleTypeTabs.module.scss";
import {TabItem, Tabs} from "@/shared/ui/Tabs/Tabs";
import {useCallback, useMemo} from "react";
import {ArticleType} from "./../../model/types/article";
import {useTranslation} from "react-i18next";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const {className, value, onChangeType} = props;
    const {t} = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => {
        return [
            {
                value: ArticleType.ALL,
                content: t('ALL')
            },
            {
                value: ArticleType.IT,
                content: t('IT')
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Economics')
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Science')
            }
        ]
    }, [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])


    return (
        <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} className={classNames(cls.ArticleTypeTabs, {}, [className])}/>
    );
};
