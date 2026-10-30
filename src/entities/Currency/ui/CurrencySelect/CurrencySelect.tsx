import {Currency} from "../../model/types/CurrencySchema";
import {useTranslation} from "react-i18next";
import {memo, useCallback, useMemo} from "react";
import {ListBox} from "@/shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { value, onChange, readonly } = props

    const {t} = useTranslation('profile');

    const optionsList = useMemo(() => {
        return [
            {value: Currency.RUB, content: Currency.RUB},
            {value: Currency.EUR, content: Currency.EUR},
            {value: Currency.JPY, content: Currency.JPY},
            {value: Currency.USD, content: Currency.USD},
        ]
    }, [])

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])
    return (
        <ListBox label={t('Currency')} readonly={readonly} value={value} items={optionsList} onChange={onChangeHandler}/>
    )
});
