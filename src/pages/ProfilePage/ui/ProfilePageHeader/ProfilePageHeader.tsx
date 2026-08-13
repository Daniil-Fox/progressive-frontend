import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import {Button} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {profileActions, profileSelectors, updateProfileData} from "entities/Profile";
import {useCallback} from "react";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');

    const readonly = useAppSelector(profileSelectors.getProfileReadonly)

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])



    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className, cls.header])}>
            {readonly ? (
                    <Button onClick={onEdit} theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                        {t('Edit')}
                    </Button>
            )
                : (<div className={cls.buttons}>
                    <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED} className={cls.editBtn}>
                        {t('Cancel')}
                    </Button>
                    <Button onClick={onSave} theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                        {t('Apply')}
                    </Button>
                </div>)
            }
        </div>
    );
};
