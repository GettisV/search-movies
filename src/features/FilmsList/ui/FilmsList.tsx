import { FilmCard } from 'entities/Films';
import { memo } from 'react';
import { Grid } from 'shared/ui/Grid/Grid';
import Loader from 'shared/ui/Loader/Loader';
import { useGetFilmQuery } from '../api/filmApi/filmApi';
import cls from './FilmsList.module.scss';

interface FilmsListProps{
    typeFilm: string,
}

export const FilmsList = memo((props: FilmsListProps) => {
    const {
        typeFilm,
    } = props;

    const { data: films, isLoading } = useGetFilmQuery({ page: 1, limit: 10, typeFilm });

    if (isLoading) {
        <Grid className={cls.filmsGrid}>
            <Loader />
        </Grid>;
    }

    return (
        <Grid className={cls.filmsGrid}>
            {
                films?.map((film) => (
                    <FilmCard
                        key={film.id}
                        filmInfo={film}
                    />
                ))
            }
        </Grid>
    );
});
