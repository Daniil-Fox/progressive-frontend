import cls from "./SidebarItem.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import HomeIcon from "shared/assets/home.svg";
import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames/classNames";
import {useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserAuthData} from "entities/User";
import {SidebarItemType} from "widgets/Sidebar/model/types/sidebarSchema";
interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
    const {item, collapsed} = props;
    const {t} = useTranslation()

    const isAuth = useAppSelector(getUserAuthData)

    if(!isAuth && item.authOnly){
        return null
    }

    return (
        <AppLink data-testid="main-page-link" className={classNames(cls.sidebarLink, { [cls.collapsed]: collapsed }, [])} theme={AppLinkTheme.SECONDARY} to={item.path}>
            <item.Icon />
            <span>{t(item.text)}</span>
        </AppLink>
    );
};
