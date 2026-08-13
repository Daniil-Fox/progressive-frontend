import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
        <h1>Page not found</h1>
    </div>
  );
};
