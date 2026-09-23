import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextTheme} from "shared/ui/Text/Text";
import {Input} from "shared/ui/Input/Input";
import {Profile} from "../../model/types/profile";
import {Loader} from "shared/ui";
import {Avatar} from "shared/ui/Avatar/Avatar";
import {CurrencySelect} from "entities/Currency";
import {Currency} from "entities/Currency/model/types/CurrencySchema";
import {Country} from "entities/Country/model/types/country";
import {CountrySelect} from "entities/Country";
import {HStack, VStack} from "shared/ui/Stack";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCountry?: (value?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className, data, error, isLoading, onChangeFirstName, onChangeLastname, onChangeAge, onChangeCity, onChangeCurrency, onChangeCountry, onChangeAvatar, onChangeUsername, readonly } = props
    const { t } = useTranslation('profile')

    const mods: Mods = {
        [cls.edit]: !readonly
    }

    if(isLoading){
        return (
            <HStack justify='center' className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </HStack>
        )
    }

    if(error){
        return (
            <HStack justify='center' className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t("Error profile page")} text={t("Something went wrong")}/>
            </HStack>
        )
    }


    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>

            <VStack gap="8" className={cls.data}>
                <HStack justify='center'>
                    {data?.avatar && (
                        <div className={cls.AvatarWrapper}>
                            <Avatar size={150} src={data.avatar}/>
                        </div>
                    )}
                </HStack>
                <Input
                    onChange={onChangeFirstName}
                    value={data?.first}
                    placeholder={t('Your name')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeLastname}
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Your age')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('City')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Avatar link')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t('Username')}
                    readonly={readonly}
                />
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly}/>
                <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly}/>
            </VStack>
        </div>
    );
};
