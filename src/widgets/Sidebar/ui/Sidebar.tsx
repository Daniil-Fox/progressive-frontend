import {classNames} from "shared/lib/helpers/classNames/classNames";
import {FC, useState} from "react";
import cls from "./Sidebar.module.scss";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import HomeIcon from 'shared/assets/home.svg'
import AboutIcon from 'shared/assets/list.svg'

interface SidebarProps {
  className?: string;
}
export const Sidebar: FC = ({ className }: SidebarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const {t} = useTranslation()

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [
                className,
            ])}
        >
            <div className={cls.links}>
                <AppLink data-testid="main-page-link" className={cls.sidebarLink} theme={AppLinkTheme.SECONDARY} to="/">
                    <HomeIcon/>
                    <span>{t("main")}</span>
                </AppLink>
                <AppLink data-testid="main-page-link" className={cls.sidebarLink} theme={AppLinkTheme.SECONDARY} to="/about">
                    <AboutIcon/>
                    <span>{t("about")}</span>
                </AppLink>
            </div>
            <Button square={true} size={ButtonSize.XL} className={cls.collapseBtn} theme={ButtonTheme.BACKGROUND_INVERTED} data-testid="toggle-sidebar-btn" onClick={toggleCollapsed}>{isCollapsed ? ">" : "<"}</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={isCollapsed}/>
            </div>
        </div>
    );
};
