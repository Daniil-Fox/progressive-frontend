import { classNames } from "shared/lib/classNames/classNames";
interface AdminPanelProps {
  className?: string;
}

const AdminPanel = ({ className }: AdminPanelProps) => {
  return (
    <div className={classNames('', {}, [className])}>
        Admin panel
    </div>
  );
};

export default AdminPanel