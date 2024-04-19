import { ChangeEvent, memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './Select.module.scss';

interface SelectType{
    className?: string;
    onChange: () => void;
    options: string[]
}

export const Select = memo((props: SelectType) => {
    const {
        className,
        onChange,
        options,
    } = props;

    const onChangeHanlder = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.();
    };

    return (
        <div
            className={ClassNames(cls.selectDiv, {}, [className])}
        >
            <select
                onChange={onChangeHanlder}
            >
                <option selected value="1">1</option>
            </select>

        </div>
    );
});
