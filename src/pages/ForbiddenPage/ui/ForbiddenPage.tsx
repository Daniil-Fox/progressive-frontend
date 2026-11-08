import { classNames } from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
interface ForbiddenProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames('', {}, [className])}>
        {t('You do not have access to this page')}
    </div>
  );
};

export default ForbiddenPage;