import { classNames } from "shared/lib/classNames/classNames";
import {FC, useCallback, useState} from "react";
import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {LoginModal} from "features/AuthByUsername";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "entities/User";
import {AppLink, Avatar, Text} from "shared/ui";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {TextTheme} from "shared/ui/Text/Text";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {pathRoutes} from "shared/routes/routes";
import {HStack} from "shared/ui/Stack";
import {NotificationButton} from "features/notificationButton";
import {AvatarDropdown} from "features/avatarDropdown";
import {Drawer} from "shared/ui/Drawer/Drawer";
import {NotificationList} from "entities/Notification";

interface NavbarProps {
    className?: string;
}
export const Navbar: FC = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const authData = useAppSelector(getUserAuthData)


    const onOpenModal = () => {
        setModalOpen(true)
    }
    const onCloseModal = () => {
        setModalOpen(false)
    }


    if(authData){
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} theme={TextTheme.INVERTED} title={'Title'}/>
                <AppLink theme={AppLinkTheme.SECONDARY} to={pathRoutes.article_create} className={cls.createBtn}>
                    Создать статью
                </AppLink>

                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
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
