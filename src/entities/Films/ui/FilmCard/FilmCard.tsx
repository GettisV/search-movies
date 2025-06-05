import { filmType } from 'entities/Films/model/types/filmFiltersTypes';
import { filmTypeResponseServer } from 'features/GetFilms';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import photoNoExistPng from '../../assets/photoNoExist.jpg';
import ratingStarPng from '../../assets/ratingStar.png';
import timePng from '../../assets/time.png';
import cls from './FilmCard.module.scss';

interface FilmCardType{
    filmInfo: filmTypeResponseServer;
    urlPoster: filmTypeResponseServer['backdrop'];
    className?: string;
    isCardOfMainSlider?: boolean,
    isCardOfSlider?: boolean,
    isCardOfGrid?: boolean,
}

export const FilmCard = memo((props: FilmCardType) => {
    const {
        filmInfo,
        urlPoster,
        className,
        isCardOfMainSlider = false,
        isCardOfSlider = false,
        isCardOfGrid = false,
    } = props;

    const {
        rating,
        movieLength,
        seriesLength,
        type,
        description,
        shortDescription,
        name,
    }:filmTypeResponseServer = filmInfo;

    const ratingKp = String(rating.kp).slice(0, 3);
    const ratingImdb = String(rating.kp).slice(0, 3);
    const image = urlPoster?.url ? (
        <img
            className={cls.img}
            src={urlPoster?.url}
            alt={urlPoster?.url}
        />
    ) : (
        <img
            className={cls.img}
            src={photoNoExistPng}
            alt={photoNoExistPng}
        />
    );

    return (
        <div className={classNames(cls.card, {}, [className])}>
            {image}
            <div className={classNames(cls.infoFilm, {
                [cls.cardMainSlider as string]: isCardOfMainSlider,
                [cls.cardSlider as string]: isCardOfSlider,
                [cls.cardGrid as string]: isCardOfGrid,
            })}
            >
                {
                    ((ratingKp.trim() || ratingImdb.trim())) && (
                        <div className={cls.ratingDiv}>
                            <img className={cls.ratingStar} src={ratingStarPng} alt={ratingStarPng} />
                            {ratingKp || ratingImdb}
                        </div>
                    )
                }
                {
                    ((seriesLength || movieLength)) && (
                        <div className={cls.timeDiv}>
                            <img className={cls.time} src={timePng} alt={timePng} />
                            {
                                type === filmType.SERIALS
                                    ? seriesLength
                                    : movieLength
                            }
                        </div>
                    )
                }
                <div className={cls.nameDescription}>
                    <h2 className={cls.name}>{ name || 'Нет имени' }</h2>
                    <p className={cls.text}>
                        { shortDescription || description || 'Нет краткого описания'}
                    </p>
                </div>
            </div>
        </div>
    );
});
