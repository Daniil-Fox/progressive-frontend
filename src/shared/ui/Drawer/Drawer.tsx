import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Drawer.module.scss";
import {memo, ReactNode, useCallback, useEffect} from "react";
import {Portal} from "shared/ui";
import {Overlay} from "./../Overlay/Overlay";
import {useAnimationLibs} from "shared/lib/AnimationProvider";
// import { useDrag } from '@use-gesture/react'
// import { a, useSpring, config } from '@react-spring/web'

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight - 100

export const DrawerContent = memo((props: DrawerProps) => {
    const {className, children, isOpen, onClose} = props;
    const {Spring, Gesture} = useAnimationLibs()
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false})
    }, [])

    useEffect(() => {
        if(isOpen){
            openDrawer()
        }
    }, [api, isOpen, openDrawer]);

    const closeDrawer = useCallback((velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: {...Spring.config.stiff, velocity},
            onResolve: onClose
        })
    }, [])

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
            if (oy < -70) cancel()

            if (last) {
                oy > height * 0.5 || (vy > 0.5 && dy > 0) ? closeDrawer() : openDrawer()
            }

            else api.start({ y: oy, immediate: true })
        },
        {
            from: () => [0, y.get()],
            filterTaps: true,
            bounds: { top: 0 },
            rubberband: true
        }
    )

    const display = y.to((py) => (py < height ? 'block' : 'none'))

    if(!isOpen){
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {[cls.opened]: isOpen}, [className, 'app_drawer'])}>
                <Overlay onClick={onClose}/>
                <Spring.a.div
                    className={cls.sheet}
                    style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

export const Drawer = memo((props: DrawerProps) => {
    const {isLoaded} = useAnimationLibs()

    if(!isLoaded) {
        return null;
    }

    return <DrawerContent {...props}/>
})