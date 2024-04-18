import { docsType } from 'features/ListMovies/types/ListMoviesTypes';
import { memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import cls from './CardMovie.module.scss';

interface CardMovieType{
    className?: string;
    filmInfo: docsType;
}

export const CardMovie = memo((props: CardMovieType) => {
    const {
        filmInfo,
        className,
    } = props;

    return (
        <section className={ClassNames(cls.card, {}, [className])}>
            <img
                className={cls.img}
                src={filmInfo.poster.previewUrl || ''}
                alt={filmInfo.poster.previewUrl || ''}
            />
            <h2>{filmInfo.name || 'Нет имени'}</h2>
            <p className={cls.text}>
                { filmInfo.shortDescription || 'Нет краткого описания'}
            </p>
        </section>
    );
});
