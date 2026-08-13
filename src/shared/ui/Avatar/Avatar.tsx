import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import {useMemo} from "react";
interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt = '' }: AvatarProps) => {
    const styles = useMemo(() => {
        return {
            width: size,
            height: size
        }
    }, [size])
  return (
    <img src={src} style={styles} className={classNames(cls.Avatar, {}, [className])} alt={alt} />
  );
};
