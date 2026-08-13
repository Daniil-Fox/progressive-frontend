import {classNames} from "shared/lib/classNames/classNames";

import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {useTheme} from "shared/lib/theme/useTheme";
import {Theme} from "shared/lib/theme/ThemeContext";
import DarkIcon from "shared/assets/theme-dark.svg"
import LightIcon from "shared/assets/theme-light.svg"
import {memo} from "react";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, switchTheme } = useTheme();

    return (
        <Button className={classNames("", {}, [className])} square={true} size={ButtonSize.L} theme={ButtonTheme.CLEAR} onClick={switchTheme}>
            {theme === Theme.LIGHT ? <DarkIcon style={{color: 'white'}} width="100%" height={"100%"}/> : <LightIcon style={{color: 'blue'}} width={40} height={40}/>}
        </Button>
    );
});
