import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ProfilePage.module.scss";
import {useTranslation} from "react-i18next";
import {useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {fetchProfileData, profileActions, ProfileCard, profileSelectors, ValidateProfileError} from "entities/Profile";
import {ProfilePageHeader} from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import {Currency} from "entities/Currency/model/types/CurrencySchema";
import {Country} from "entities/Country/model/types/country";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useParams} from "react-router-dom";
import {Page} from "shared/ui/Page/Page";

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const {t} = useTranslation('profile');
  const dispatch = useAppDispatch()
  const formData = useAppSelector(profileSelectors.getProfileForm)
  const isLoading = useAppSelector(profileSelectors.getProfileIsLoading)
  const error = useAppSelector(profileSelectors.getProfileError)
  const readonly = useAppSelector(profileSelectors.getProfileReadonly)
  const validateErrors = useAppSelector(profileSelectors.getValidateError)
  const {id} = useParams()

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
      <Page className={classNames(cls.PortfolioPage, {}, [className])}>
        <div className={cls.header}>
          <h1>{t('Profile Page')}</h1>
          <ProfilePageHeader/>
        </div>
        { validateErrors?.length && validateErrors.map(err => {
          return <Text
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
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
      </Page>
  );
};

export default ProfilePage;