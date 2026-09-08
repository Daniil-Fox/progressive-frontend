import { classNames } from "shared/lib/classNames/classNames";
import {FC, useState} from "react";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserAuthData, userActions} from "entities/User";
import {AppLink, Text} from "shared/ui";
import {pathRoutes} from "app/routes/config/routes";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {TextTheme} from "shared/ui/Text/Text";
interface NavbarProps {
    className?: string;
}
export const Navbar: FC = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const authData = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    const onOpenModal = () => {
        setModalOpen(true)
    }
    const onCloseModal = () => {
        setModalOpen(false)
    }

    const onLogout = () => {
        dispatch(userActions.logout())
    }

    if(authData){
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} theme={TextTheme.INVERTED} title={'Title'}/>
                <AppLink theme={AppLinkTheme.SECONDARY} to={pathRoutes.article_create} className={cls.createBtn}>
                    Создать статью
                </AppLink>
                <div className={cls.links}>
                    <Button onClick={onLogout}>
                        {t('logout')}
                    </Button>
                </div>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Button onClick={onOpenModal}>
                    {t('open modal')}
                </Button>

                <LoginModal isOpen={modalOpen} onClose={onCloseModal}></LoginModal>
            </div>
        </header>
    );
};
