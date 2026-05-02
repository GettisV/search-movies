import { Register } from 'features/Register';
import {
    memo,
} from 'react';
import { classNames } from 'shared/lib/classNames';

interface RegisterPageType{
    className?: string;
}

export const RegisterPage = memo((props: RegisterPageType) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Register />
        </div>
    );
});
