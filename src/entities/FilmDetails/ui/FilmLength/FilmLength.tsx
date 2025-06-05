import { filmType } from 'entities/Films';
import { memo } from 'react';
import cls from './FilmLength.module.scss';

interface FilmLengthType{
    type?: string;
    seriesLength?: number;
    movieLength?: number;
}

export const FilmLength = memo((props: FilmLengthType) => {
    const {
        type: filmTypeProp,
        seriesLength,
        movieLength,
    } = props;

    const isNotEmptySeriesLength = !!seriesLength;
    const isNotEmptyMovieLength = !!movieLength;

    switch (filmTypeProp) {
    case filmType.SERIALS: {
        return (
            isNotEmptySeriesLength && (
                <>
                    <span
                        className={`${cls.bold} ${cls.header} ${cls.mr10}`}
                    >
                        Время серии:
                    </span>
                    {' '}
                    {seriesLength}
                    {' '}
                    мин.
                </>
            )
        );
    }
    default: {
        return (
            isNotEmptyMovieLength && (
                <>
                    <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Время:</span>
                    {' '}
                    {movieLength}
                    {' '}
                    мин.
                </>
            )
        );
    }
    }
});
