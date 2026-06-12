import { classNames } from "shared/lib/helpers/classNames/classNames";
import { FC } from "react";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
interface NavbarProps {
  className?: string;
}
export const Navbar: FC = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    {t("main")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t("about")}
                </AppLink>
            </div>
        </div>
    );
};
