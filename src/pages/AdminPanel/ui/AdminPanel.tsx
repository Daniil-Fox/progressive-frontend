import { classNames } from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
interface AdminPanelProps {
  className?: string;
}

const AdminPanel = ({ className }: AdminPanelProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames('', {}, [className])}>
        {t('admin panel')}
    </div>
  );
};

export default AdminPanel