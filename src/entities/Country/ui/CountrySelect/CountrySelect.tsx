import {useCallback, useMemo} from "react";
import {Country} from "@/entities/Country/model/types/country";
import {useTranslation} from "react-i18next";
import {ListBox} from "@/shared/ui/ListBox/ListBox";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect = (props: CountrySelectProps) => {
    const {t} = useTranslation('profile');

    const { value, readonly, onChange } = props

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    const countryList = useMemo(() => {
        return [
            {value: Country.America, content: Country.America},
            {value: Country.Russia, content: Country.Russia},
            {value: Country.Belarus, content: Country.Belarus},
        ]
    }, [])

    return (
        <ListBox label={t('Country')} readonly={readonly} onChange={onChangeCountry} value={value} items={countryList}/>
    )

};
