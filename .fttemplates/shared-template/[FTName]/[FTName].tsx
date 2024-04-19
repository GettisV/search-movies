import { memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './<FTName|pascalcase>.module.scss';

interface <FTName|pascalcase>Type{
    className?: string;
}

export const <FTName|pascalcase> = memo((props: <FTName|pascalcase>Type) => {
    const {
        className,
    } = props;

    return (
        <div className={ClassNames('', {}, [className])}>
            1
        </div>
    );
});