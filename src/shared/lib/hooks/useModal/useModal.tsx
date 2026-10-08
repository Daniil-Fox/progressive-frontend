import {useEffect, useState} from "react";

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
}

export const useModal = (props: UseModalProps) => {
    const {lazy, isOpen, onClose} = props
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
            onClose?.()
        }
    }
    if(lazy && !mounted) {
        return null
    }
    return {
        mounted
    }
}