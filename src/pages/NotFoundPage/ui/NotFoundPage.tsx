import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import {Page} from "widgets/Page/ui/Page";
interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <Page className={classNames(cls.notFoundPage, {}, [className])}>
        <h1>Page not found</h1>
    </Page>
  );
};
