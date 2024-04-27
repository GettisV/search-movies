import { ChangeEvent } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Select.module.scss';

export interface selectOptionsType<T extends string> {
    value: T,
    content: string,
}

interface SelectType<T extends string>{
    className?: string;
    onChange: (value: T) => void;
    options: selectOptionsType<T>[];
    value?: T;
}

export const Select = <T extends string>(props: SelectType<T>) => {
    const {
        className,
        onChange,
        options,
        value,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.currentTarget.value as T);
    };

    return (
        <div
            className={classNames(cls.selectDiv, {}, [className])}
        >
            <select
                value={value}
                onChange={onChangeHandler}
            >
                {options.map((opt) => <option value={opt.value} key={opt.value}>{opt.content}</option>)}
            </select>
        </div>
    );
};
