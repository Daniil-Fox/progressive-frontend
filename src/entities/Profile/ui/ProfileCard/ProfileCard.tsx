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
import {Select} from "shared/ui/Select/Select";
import {Country} from "entities/Country/model/types/country";
import {CountrySelect} from "entities/Country";

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
    const {t} = useTranslation('profile')

    const mods: Mods = {
        [cls.edit]: !readonly
    }

    if(isLoading){
        return <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
            <Loader/>
        </div>
    }

    if(error){
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Text align={TextAlign.CENTER} theme={TextTheme.ERROR} title={t("Error profile page")} text={t("Something went wrong")}/>
            </div>
        )
    }


    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>

            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.AvatarWrapper}>
                        <Avatar size={150} src={data.avatar}/>
                    </div>
                )}
                <Input
                    onChange={onChangeFirstName}
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeLastname}
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAge}
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeCity}
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAvatar}
                    value={data?.avatar}
                    placeholder={t('Avatar link')}
                    className={cls.input}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeUsername}
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    readonly={readonly}
                />
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly}/>
                <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly}/>
            </div>
        </div>
    );
};
