import { memo } from 'react';
import { ratingType } from 'features/GetFilms';
import cls from './FilmRatings.module.scss';

interface FilmRatingsType{
    ratings?: ratingType,
}

export const FilmRatings = memo((props: FilmRatingsType) => {
    const {
        ratings,
    } = props;

    return (
        <p>
            <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Рейтинги:</span>
            {!!ratings?.kp && (
                <>
                    <span>Кинопоиск:</span>
                    {' '}
                    <span className={`${cls.bold} ${cls.mr10}`}>
                        {
                            String(ratings.kp).slice(0, 3)
                        }
                    </span>
                </>
            )}
            {!!ratings?.imdb && (
                <>
                    <span>imdb:</span>
                    {' '}
                    <span className={cls.bold}>
                        {
                            String(ratings.imdb).slice(0, 3)
                        }
                    </span>
                </>
            )}
        </p>
    );
});
