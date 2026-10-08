import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import React, {useEffect, useState} from "react";
import {Portal} from "./../Portal/Portal";
import {Overlay} from "./../Overlay/Overlay";
import {useModal} from "shared/lib/hooks/useModal/useModal";

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;
    useModal({lazy, onClose, isOpen})

    const mods: Mods = {
        [cls.open]: isOpen
    }


    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay className={cls.overlay} onClick={onClose}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
