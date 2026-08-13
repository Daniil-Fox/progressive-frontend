import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const { className, placeholder, value, onChange, autoFocus, readonly, ...otherProps  } = props;
    const [caretPosition, setCaretPosition] = useState(0);

    const [isFocused, setFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(autoFocus){
            setFocused(true);
            inputRef.current?.focus()
        }
    }, [autoFocus])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        const caretPosition = Math.min(e.target.value.length, inputRef.current?.clientWidth || 0)
        setCaretPosition(caretPosition)
    }

    const onFocus = () => {
        setFocused(true);
    }

    const onBlur = () => {
        setFocused(false)
    }

    const onSelect = (e: any ) => {
        setCaretPosition(e?.target?.selectionStart)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            <label className={cls.label}>
                {placeholder && <span className={cls.placeholder}>
                    {placeholder + " > "}
                </span>}
                <div className={cls.caretWrapper}>
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        {...otherProps}
                        className={cls.Input}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        readOnly={readonly}
                    />
                    {isFocused && !readonly && <span style={{left: `${caretPosition * 7}px`}}></span>}
                </div>
            </label>
        </div>
    );
});
