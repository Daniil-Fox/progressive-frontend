import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ListBox.module.scss";
import { Listbox as HListbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import React, {Fragment, ReactNode} from "react";
import {Button} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";
import {HStack} from "shared/ui/Stack";
import {flip, offset, shift, useFloating} from "@floating-ui/react";

interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface ListBoxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    readonly?: boolean;
    label?: string
}


export const ListBox = <T extends string,>(props: ListBoxProps<T>) => {
    const {className, items, onChange, defaultValue, value, readonly, label} = props;
    const {refs, floatingStyles} = useFloating({
        placement: 'bottom-start',
        middleware: [
            offset(4),
            shift({ padding: 8 }),
            flip(),
        ]
    });
    return (
        <HStack gap={"8"}>
            {label && (
                <span
                    className={cls.label}>
                        {label + " > "}
                    </span>
            )}
            <HListbox
                disabled={readonly}
                as={"div"}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                className={classNames(cls.Listbox, {[cls.readonly]: readonly}, [className])}
            >
                <ListboxButton className={cls.trigger} ref={refs.setReference} as={"div"}>
                    <Button theme={ButtonTheme.OUTLINE}>
                        {value}
                    </Button>
                </ListboxButton>
                <ListboxOptions as={"ul"} ref={refs.setFloating} style={floatingStyles} className={cls.options} >
                    {items?.map((item) => (
                        <ListboxOption as={Fragment} key={item.value} value={item.value}>
                            {({focus, selected, disabled}) => (
                                <li className={classNames(cls.item, {[cls.selected]: selected, [cls.focus]: focus, [cls.disabled]: disabled}, [])}>
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListbox>
        </HStack>
    );
};
