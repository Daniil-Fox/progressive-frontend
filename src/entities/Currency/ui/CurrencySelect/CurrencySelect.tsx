import { classNames } from "shared/lib/classNames/classNames";
import {Select} from "shared/ui/Select/Select";
import {Currency} from "../../model/types/CurrencySchema";
import {useTranslation} from "react-i18next";
import {memo, useCallback, useMemo} from "react";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly } = props

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
    }, [])

    return (
        <Select className={classNames('', {}, [className])}
                label={t('Currency')}
                options={optionsList}
                onChange={onChangeHandler}
                value={value}
                readonly={readonly}
        />
    );
});
