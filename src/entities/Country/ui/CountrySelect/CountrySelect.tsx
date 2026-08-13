import { classNames } from "shared/lib/classNames/classNames";
import cls from "./CountrySelect.module.scss";
import {useCallback, useMemo} from "react";
import {Select} from "shared/ui/Select/Select";
import {Country} from "entities/Country/model/types/country";
import {useTranslation} from "react-i18next";
interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = (props: CountrySelectProps) => {
    const {t} = useTranslation('profile');

    const { className, value, readonly, onChange } = props

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [])

    const countryList = useMemo(() => {
        return [
            {value: Country.America, content: Country.America},
            {value: Country.Russia, content: Country.Russia},
            {value: Country.Belarus, content: Country.Belarus},
        ]
    }, [])

    return (
        <Select
            className={classNames(cls.CountrySelect, {}, [className])}
            label={t('Country')}
            value={value}
            onChange={onChangeCountry}
            options={countryList}
            readonly={readonly}
        />

    );
};
