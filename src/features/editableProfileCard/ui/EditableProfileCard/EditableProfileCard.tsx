import {classNames} from "shared/lib/classNames/classNames";
import {Text} from "shared/ui";
import {TextTheme} from "shared/ui/Text/Text";
import {ProfileCard} from "entities/Profile";
import {useTranslation} from "react-i18next";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {profileActions} from "../../model/slice/ProfileSlice";
import {ValidateProfileError} from "../../model/types/profile";
import {useCallback} from "react";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {
    EditableProfileCardHeader
} from "./../EditableProfileCardHeader/EditableProfileCardHeader";
import {VStack} from "shared/ui/Stack";
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly, getValidateError
} from "./../../model/selector/selectors";

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const {className, id} = props;

    const {t} = useTranslation('profile');

    const dispatch = useAppDispatch()
    const formData = useAppSelector(getProfileForm)
    const isLoading = useAppSelector(getProfileIsLoading)
    const error = useAppSelector(getProfileError)
    const readonly = useAppSelector(getProfileReadonly)
    const validateErrors = useAppSelector(getValidateError)

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect country'),
        [ValidateProfileError.INCORRECT_AGE]: t('incorrect age'),
        [ValidateProfileError.NO_DATA]: t('no data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    }

    const onChangeName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value) || 0}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.updateProfile({currency: value|| Currency.EUR}))
    }, [dispatch])

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.updateProfile({country: value|| Country.America}))
    }, [dispatch])

    useInitialEffect(() => {
        if(id){
            dispatch(fetchProfileData(id))
        }
    })

    return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            <EditableProfileCardHeader/>

            { validateErrors?.length && validateErrors.map(err => {
                return <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslates[err]}
                    data-testid={'EditableProfileCardError'}
                />
            })}
            <ProfileCard
                readonly={readonly}
                onChangeFirstName={onChangeName}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                data={formData}
                isLoading={isLoading}
                error={error}
            />
        </VStack>
    );
};
