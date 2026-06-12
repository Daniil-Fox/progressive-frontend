import { classNames } from "shared/lib/helpers/classNames/classNames";

import { Button } from "shared/ui/Button/Button";
import { useTheme } from "shared/lib/theme/useTheme";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, switchTheme } = useTheme();
    return (
        <Button className={classNames("", {}, [className])} onClick={switchTheme}>
            Change theme
        </Button>
    );
};
