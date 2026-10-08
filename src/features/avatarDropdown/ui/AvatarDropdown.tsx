import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AvatarDropdown.module.scss";
import {Dropdown} from "shared/ui/Dropdown/Dropdown";
import {Avatar} from "shared/ui";
import {pathRoutes} from "shared/routes/routes";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "entities/User";
import {useTranslation} from "react-i18next";

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = ({className}: AvatarDropdownProps) => {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(userActions.logout())
  }
  const isAdmin = useAppSelector(isUserAdmin)
  const isManager = useAppSelector(isUserManager)
  const authData = useAppSelector(getUserAuthData)
  const { t } = useTranslation();
  const isAdminPanelAvailable = isAdmin || isManager
  if(!authData) {
    return null;
  }
  return (
      <Dropdown
          className={classNames(cls.AvatarDropdown, {}, [className])}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('admin panel'),
              href: pathRoutes.admin_panel
            }] : []),
            {
              content: t('profile'),
              href: pathRoutes.profile + authData.id
            },
            {
              content: t('logout'),
              onClick: onLogout
            }

          ]}
          trigger={<Avatar size={30} src={authData.avatar}/>}
      />
  );
};
