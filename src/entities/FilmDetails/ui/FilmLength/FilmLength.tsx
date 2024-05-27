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
        type,
        seriesLength,
        movieLength,
    } = props;

    return (
        <p>
            {
                type === filmType.SERIALS
                    ? (
                        !!seriesLength
                            && (
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
                    )
                    : (
                        !!movieLength
                            && (
                                <>
                                    <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Время:</span>
                                    {' '}
                                    {movieLength}
                                    {' '}
                                    мин.
                                </>
                            )
                    )
            }
        </p>
    );
});
