import { classNames } from "shared/lib/classNames/classNames";
import {Button, Text} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {profileActions, profileSelectors, updateProfileData} from "entities/Profile";
import {useCallback} from "react";
import {getUserAuthData} from "entities/User";
import {HStack} from "shared/ui/Stack/HStack/HStack";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const {t} = useTranslation('profile');

    const authData = useAppSelector(getUserAuthData)
    const profileData = useAppSelector(profileSelectors.getProfileData)

    const canEdit = profileData?.id === authData?.id;

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
        <HStack justify='between' align='center' className={className}>
            <Text title={t('Profile Page')}/>
            <>
                {canEdit && (
                    <div>
                        {readonly ? (
                                <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
                                    {t('Edit')}
                                </Button>
                            )
                            : (<HStack gap="8">
                                <Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
                                    {t('Cancel')}
                                </Button>
                                <Button onClick={onSave} theme={ButtonTheme.OUTLINE}>
                                    {t('Apply')}
                                </Button>
                            </HStack>)
                        }
                    </div>
                )}
            </>
        </HStack>
    );
};
