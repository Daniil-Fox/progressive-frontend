import {useCallback, useEffect, useState} from "react";

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
}

export const useModal = (props: UseModalProps) => {
    const {lazy, isOpen, onClose} = props
    const [mounted, setMounted] = useState(false);

    const onKeyboardCLick = useCallback((e: KeyboardEvent)=> {
        if(e.key === "Escape"){
            onClose?.()
        }
    }, [onClose])

    useEffect(() => {
        window.addEventListener('keydown', onKeyboardCLick)

        return () => {
            window.removeEventListener('keydown', onKeyboardCLick)
        }
    }, [onKeyboardCLick])

    useEffect(() => {
        if(isOpen && !mounted){
            setMounted(true)
        }
    }, [isOpen, mounted]);



    if(lazy && !mounted) {
        return null
    }
    return {
        mounted
    }
}