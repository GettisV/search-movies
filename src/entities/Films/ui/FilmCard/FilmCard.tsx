import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { filmTypeResponseServer } from 'features/GetFilms';
import movieImg from '../../assets/movie.png';
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

    return (
        <section className={classNames(cls.card, {}, [className])}>
            <img
                className={cls.img}
                src={filmInfo.poster?.previewUrl || movieImg}
                alt={filmInfo.poster?.previewUrl || ''}
            />
            <div className={cls.infoFilm}>
                <div className={cls.nameDescription}>
                    <h2 className={cls.name}>{ filmInfo.name || 'Нет имени' }</h2>
                    <p className={cls.text}>
                        { filmInfo.shortDescription || 'Нет краткого описания'}
                    </p>
                </div>
            </div>
        </section>
    );
});
