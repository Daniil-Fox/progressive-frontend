import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {getUserAuthData} from "entities/User";
import {profileActions, profileSelectors} from "./../../model/slice/ProfileSlice";
import {useCallback} from "react";
import {updateProfileData} from "./../../model/services/updateProfileData/updateProfileData";
import {HStack} from "shared/ui/Stack";
import {Button, Text} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({className}: EditableProfileCardHeaderProps) => {
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
        <div className={classNames('', {}, [className])}>
            <HStack justify='between' align='center' className={className}>
                <Text title={t('Profile Page')}/>
                <>
                    {canEdit && (
                        <div>
                            {readonly ? (
                                    <Button data-testid={'EditableProfileCardHeader.editbtn'} onClick={onEdit} theme={ButtonTheme.OUTLINE}>
                                        {t('Edit')}
                                    </Button>
                                )
                                : (<HStack gap="8">
                                    <Button data-testid={'EditableProfileCardHeader.cancelbtn'} onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>
                                        {t('Cancel')}
                                    </Button>
                                    <Button data-testid={'EditableProfileCardHeader.applybtn'} onClick={onSave} theme={ButtonTheme.OUTLINE}>
                                        {t('Apply')}
                                    </Button>
                                </HStack>)
                            }
                        </div>
                    )}
                </>
            </HStack>
        </div>
    );
};
