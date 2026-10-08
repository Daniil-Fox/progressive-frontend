import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Popover.module.scss";
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {ReactNode} from "react";
import {flip, offset, shift, useFloating} from "@floating-ui/react";
interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {className, trigger, children} = props
    const {floatingStyles, refs} = useFloating({
        placement: 'bottom-end',
        middleware: [
            flip(),
        ]
    })
    return (
        <HPopover className={classNames(cls.Popover, {}, [className])}>
            <PopoverButton as={"div"} className={cls.trigger} ref={refs.setReference}>
                {trigger}
            </PopoverButton>
            <PopoverPanel style={floatingStyles} ref={refs.setFloating} className={cls.panel}>
                {children}
            </PopoverPanel>
        </HPopover>
    );
};
