import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLang = async () => {
        await i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            onClick={toggleLang}
        >
            {t("lang")}
        </Button>
    );
};
