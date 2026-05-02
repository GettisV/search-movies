import {
    ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetUserQuery } from 'shared/api/db-api/db-api';
import cls from './Auth.module.scss';

export default function Auth() {
    const navigate = useNavigate();
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [trigger, { data }] = useLazyGetUserQuery();

    useEffect(() => {
        if (data?.length > 0) {
            localStorage.setItem('isAuth', 'true');
            localStorage.setItem('User', JSON.stringify(data));
            setLogin('');
            setPassword('');
            navigate('/');
        }
    }, [data, login, navigate, password]);

    const onClickNoAccountHandler = useCallback(() => navigate('/register'), [navigate]);

    const onChangeInputLogin = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) return;

        setLogin(e.target.value);
    }, [setLogin]);

    const onChangeInputPassword = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) return;

        setPassword(e.target.value);
    }, [setPassword]);

    const onSubmitButtonSignIn = useCallback(() => {
        trigger({ login, password });
    }, [login, password, trigger]);

    return (
        <form action="" className={cls.form}>
            <h1 className={cls.header}>Авторизация</h1>
            <input placeholder="login" value={login} className={cls.login} onChange={onChangeInputLogin} type="text" />
            <input placeholder="password" value={password} className={cls.password} onChange={onChangeInputPassword} type="password" />
            <button type="button" className={cls.noAccountText} onClick={onClickNoAccountHandler}>Нет аккаунта? Создадим?</button>

            <button className={cls.submit} onClick={onSubmitButtonSignIn} type="button">Вход</button>
        </form>
    );
}
