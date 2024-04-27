import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Grid.module.scss';

interface GridProps{
    children: ReactNode
    className?: string;
}

export function Grid(props: GridProps) {
    const {
        children,
        className,
    } = props;

    return (
        <div className={classNames(cls.grid, {}, [className])}>
            {children}
        </div>
    );
}
