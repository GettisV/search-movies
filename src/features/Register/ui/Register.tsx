import { ChangeEvent, useCallback, useState } from 'react';
import { useAddUserMutation } from 'shared/api/db-api/db-api';
import cls from './Register.module.scss';

type Props = {}

export function Register(props: Props) {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [addPost] = useAddUserMutation();

    const onChangeInputLogin = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) return;

        setLogin(e.target.value);
    }, [setLogin]);

    const onChangeInputPassword = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) return;

        setPassword(e.target.value);
    }, [setPassword]);

    const onChangeInputEmail = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) return;

        setEmail(e.target.value);
    }, []);

    const onClickSignUpButton = useCallback(async () => {
        try {
            await addPost({ login, email, password });
            setLogin('');
            setPassword('');
            setEmail('');
        } catch (e) {
            console.log(e);
        }
    }, [addPost, email, login, password]);

    return (
        <form action="" className={cls.form}>
            <h1 className={cls.header}>Регистрация</h1>
            <input placeholder="login" value={login} onChange={onChangeInputLogin} className={cls.login} type="text" />
            <input placeholder="email" value={email} onChange={onChangeInputEmail} className={cls.email} type="email" />
            <input placeholder="password" value={password} onChange={onChangeInputPassword} className={cls.password} type="password" />

            <button className={cls.submit} onClick={onClickSignUpButton} type="button">Зарегистрироваться</button>
        </form>
    );
}
