import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './FilmHeader.module.scss';

interface FilmHeaderType{
    className?: string;
}

export const FilmHeader = memo((props: FilmHeaderType) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            123
        </div>
    );
});
