import { ReactNode } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
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
        <div className={ClassNames(cls.grid, {}, [className])}>
            {children}
        </div>
    );
}
