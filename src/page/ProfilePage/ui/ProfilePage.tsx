import {
    ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { useEditUserMutation } from 'shared/api/db-api/db-api';
import cls from './ProfilePage.module.scss';

type Props = {}

export function ProfilePage(props: Props) {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [editUser] = useEditUserMutation();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('User') || '');

        setLogin(user[0].login);
        setEmail(user[0].email);
    }, []);

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

    const onClickSaveProfileInfo = useCallback(async () => {
        try {
            const user = JSON.parse(localStorage.getItem('User') || '');

            editUser({
                login, password, email, id: user[0].id,
            });
        } catch (e) {
            console.log(e);
        }
    }, [editUser, email, login, password]);

    return (
        <div>
            <form action="" className={cls.form}>
                <h1 className={cls.header}>Профиль</h1>
                <input placeholder="login" value={login} onChange={onChangeInputLogin} className={cls.login} type="text" />
                <input placeholder="email" value={email} onChange={onChangeInputEmail} className={cls.email} type="email" />
                <input placeholder="password" value={password} onChange={onChangeInputPassword} className={cls.password} type="password" />

                <button className={cls.submit} onClick={onClickSaveProfileInfo} type="button">Сохранить</button>
            </form>
        </div>
    );
}
