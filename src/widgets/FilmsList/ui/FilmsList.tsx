import {
    FilmsGrid,
} from 'entities/Films';
import {
    FilmsFilters, useFilmQueryFromURL,
    useGetFilmQuery,
} from 'features/GetFilms';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './FilmsList.module.scss';

interface FilmsListType {
    className?: string,
}

export const FilmsList = memo((props: FilmsListType) => {
    const {
        className,
    } = props;

    const queryArgs = useFilmQueryFromURL();
    const { data, isFetching, isSuccess } = useGetFilmQuery(queryArgs);
    const films = data?.docs || [];

    return (
        <section
            className={classNames('', {}, [className])}
        >
            <FilmsFilters />
            <FilmsGrid films={films} />
            {
                !Boolean(data?.docs?.length)
                && !isFetching
                && isSuccess
                && <div className={cls.filmsNotFound}>Фильмы не найдены :(</div>
            }
            {
                isFetching && (
                    <div className={cls.loaderBlock}>
                        <Loader />
                    </div>
                )
            }
        </section>
    );
});
