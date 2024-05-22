import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { FilmHeader } from 'entities/FilmDetails/ui/FilmHeader/FilmHeader';
import cls from './FilmArticle.module.scss';

interface FilmArticleType{
    className?: string;
}

export const FilmArticle = memo((props: FilmArticleType) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <FilmHeader />
        </div>
    );
});
