import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotificationButton.module.scss";
import {Button} from "shared/ui";
import {ButtonTheme} from "shared/ui/Button/Button";
import {Icon} from "shared/ui/Icon/Icon";
import NotyIcon from 'shared/assets/noty.svg'
import {NotificationList} from "entities/Notification";
import {Popover} from "shared/ui/Popover/Popover";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = ({ className }: NotificationButtonProps) => {
  return (
      <Popover className={classNames(cls.NotificationButton, {}, [className])} trigger={
          <Button theme={ButtonTheme.CLEAR}>
              <Icon Svg={NotyIcon} inverted={true}/>
          </Button>
      }>
          <NotificationList className={cls.notifications}/>
      </Popover>
  );
};
