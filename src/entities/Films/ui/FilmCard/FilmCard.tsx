import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { filmTypeResponseServer } from 'features/GetFilms';
import { filmType } from 'entities/Films/model/types/filmFiltersTypes';
import photoNoExistPng from '../../assets/photoNoExist.jpg';
import ratingStarPng from '../../assets/ratingStar.png';
import timePng from '../../assets/time.png';
import cls from './FilmCard.module.scss';

interface FilmCardType{
    className?: string;
    filmInfo: filmTypeResponseServer;
}

export const FilmCard = memo((props: FilmCardType) => {
    const {
        filmInfo,
        className,
    } = props;

    const ratingKp = String(filmInfo.rating.kp).slice(0, 3);
    const ratingImdb = String(filmInfo.rating.kp).slice(0, 3);

    function existPhoto() {
        return filmInfo.poster?.previewUrl ? (
            <img
                className={cls.img}
                src={filmInfo.poster?.previewUrl}
                alt={filmInfo.poster?.previewUrl}
            />
        ) : (
            <img
                className={cls.img}
                src={photoNoExistPng}
                alt={photoNoExistPng}
            />
        );
    }

    return (
        <div className={classNames(cls.card, {}, [className])}>
            { existPhoto()}
            <div className={cls.infoFilm}>
                {
                    (ratingKp.trim() || ratingImdb.trim()) && (
                        <div className={cls.ratingDiv}>
                            <img className={cls.ratingStar} src={ratingStarPng} alt={ratingStarPng} />
                            {ratingKp || ratingImdb}
                        </div>
                    )
                }
                {
                    (filmInfo.seriesLength || filmInfo.movieLength) && (
                        <div className={cls.timeDiv}>
                            <img className={cls.time} src={timePng} alt={timePng} />
                            {
                                filmInfo.type === filmType.SERIALS
                                    ? filmInfo.seriesLength
                                    : filmInfo.movieLength
                            }
                        </div>
                    )
                }
                <div className={cls.nameDescription}>
                    <h2 className={cls.name}>{ filmInfo.name || 'Нет имени' }</h2>
                    <p className={cls.text}>
                        { filmInfo.shortDescription || filmInfo.description || 'Нет краткого описания'}
                    </p>
                </div>
            </div>
        </div>
    );
});
