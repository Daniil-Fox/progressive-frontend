import { classNames } from "shared/lib/classNames/classNames";
interface ForbiddenProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenProps) => {
  return (
    <div className={classNames('', {}, [className])}>
        У вас нет доступа к этой странице
    </div>
  );
};

export default ForbiddenPage;