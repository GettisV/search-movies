import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'autoFocus'>;

interface InputProps extends HTMLInputProps{
    value?: string,
    onChange?: (value: any)=>void,
}

export const Input = memo((props:InputProps) => {
    const {
        value,
        onChange,
        className,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target?.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                value={value}
                type={type}
                className={classNames(cls.input, {}, [className])}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
