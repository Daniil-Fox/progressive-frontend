import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, {useEffect, useState} from "react";
import {Portal} from "shared/ui/Portal/Portal";

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', onKeyboardCLick)

        return () => {
            window.removeEventListener('keydown', onKeyboardCLick)
        }
    }, [])

    useEffect(() => {
        if(isOpen && !mounted){
            setMounted(true)
        }
    }, [isOpen]);

    const onKeyboardCLick = (e: KeyboardEvent) => {
        if(e.key === "Escape"){
            onClose()
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClose()
    }

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const mods: Mods = {
        [cls.open]: isOpen
    }

    if(lazy && !mounted) {
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])} onClick={handleClick}>
                <div className={cls.overlay} ></div>
                <div className={cls.content} onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
