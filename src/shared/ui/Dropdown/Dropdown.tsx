import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Dropdown.module.scss";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {flip, offset, useFloating} from "@floating-ui/react";
import {Fragment, ReactNode} from "react";
import {AppLink} from "shared/ui";

export interface DropdownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[]
    trigger?: ReactNode
}

export const Dropdown = (props: DropdownProps) => {
    const {className, items, trigger} = props;
    const {floatingStyles, refs} = useFloating({
        placement: 'bottom-start',
        middleware: [
            flip(),
            offset(4)
        ]
    })

    return (
        <Menu as={"div"} className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton ref={refs.setReference} className={cls.btn}>{trigger}</MenuButton>
            <MenuItems ref={refs.setFloating} style={floatingStyles} className={cls.menu}>
                {items.map(item => {
                    const content = ({focus}: {focus: boolean}) => (
                        <button type={"button"} disabled={item.disabled} className={classNames('', {[cls.active]: focus}, [cls.item])} onClick={item.onClick}>
                            {item.content}
                        </button>
                    )

                    if(item.href){
                        return (
                            <MenuItem as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </MenuItem>
                        )
                    }

                    return (
                        <MenuItem as={Fragment} disabled={item.disabled}>
                            {content}
                        </MenuItem>
                    )
                })}
            </MenuItems>
        </Menu>
    );
};
