import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { filmDetailsResponseServerType } from 'features/GetFilms';
import { FilmLength } from '../FilmLength/FilmLength';
import { FilmRatings } from '../FilmRatings/FilmRatings';
import cls from './FilmInfo.module.scss';

interface FilmInfoType{
    film?: filmDetailsResponseServerType,
    className?: string;
}

export const FilmInfo = memo((props: FilmInfoType) => {
    const {
        film,
        className,
    } = props;

    return (
        <div className={classNames(cls.filmInfo, {}, [className])}>
            <h1>{film?.name || ''}</h1>
            {film?.alternativeName && <h2 className={cls.alternativeName}>{film?.alternativeName}</h2>}
            <div className={cls.filmInfoContainer}>
                <div className={cls.posterContainer}>
                    <img
                        className={cls.poster}
                        src={film?.poster.url || ''}
                        alt={film?.poster.url || ''}
                    />
                </div>
                <div className={cls.filmInfoDetails}>
                    <FilmRatings ratings={film?.rating} />
                    <p>
                        <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Год выхода:</span>
                        {' '}
                        {film?.year || ''}
                    </p>
                    <p>
                        <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Жанры:</span>
                        {
                            film?.genres.map((genre, index) => {
                                if ((index + 1) === film.genres.length) return genre.name || '';
                                return (genre.name && `${genre.name}, `) || '';
                            })
                        }
                    </p>
                    <p>
                        <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Возраст:</span>
                        { (film?.ageRating && `${film?.ageRating}+`) || ''}
                    </p>

                    <FilmLength
                        type={film?.type}
                        seriesLength={film?.seriesLength}
                        movieLength={film?.movieLength}
                    />

                    <p>
                        <span className={`${cls.bold} ${cls.header} ${cls.mr10}`}>Страна:</span>
                        {film?.countries.map((country, index) => {
                            if ((index + 1) === film.countries.length) return country.name || '';
                            return (country.name && `${country.name}, `) || '';
                        })}
                    </p>

                    <div className={cls.containerDescription}>
                        <span className={`${cls.bold} ${cls.header}`}>Описание:</span>
                        <p className={cls.mt10}>
                            {film?.description}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
});
