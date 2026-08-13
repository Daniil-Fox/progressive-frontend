import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input/Input";
import {memo, useCallback} from "react";
import {
    getLoginFormError,
    getLoginFormIsLoading,
    getLoginFormPassword,
    getLoginFormUsername,
    loginActions
} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {useAppDispatch, useAppSelector} from "shared/lib/store/hooks/hooks";
import {Text, TextTheme} from "shared/ui/Text/Text";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const {t} = useTranslation();

  const dispatch = useAppDispatch();
  const username = useAppSelector(getLoginFormUsername)
  const password = useAppSelector(getLoginFormPassword)
  const isLoading = useAppSelector(getLoginFormIsLoading)
  const error = useAppSelector(getLoginFormError)

  const onChangeUsername = useCallback((value: string) => {
      dispatch(loginActions.setUsername(value))
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
      dispatch(loginActions.setPassword(value))
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
      const result = await dispatch(loginByUsername({ username, password }))
      if(result.meta.requestStatus === "fulfilled"){
          onSuccess()
      }
  }, [username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('login form')}/>
        {error && <Text theme={TextTheme.ERROR} title={'error'}/>}
        <Input className={cls.input} placeholder="Введите username" autoFocus={true} onChange={onChangeUsername} value={username}/>
        <Input className={cls.input} placeholder="Введите пароль" onChange={onChangePassword} value={password}/>
        <Button disabled={isLoading} onClick={onLoginClick} theme={ButtonTheme.OUTLINE} className={cls.btn}>{t('Войти')}</Button>
    </div>
  );
});

export default LoginForm