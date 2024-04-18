import { Grid } from 'shared/ui/Grid/Grid';
import { rtkApi } from 'shared/api/rtkApi';
import Loader from 'shared/ui/Loader/Loader/Loader';
import { memo } from 'react';
import { CardMovie } from '../../../entities/Movies/ui/CardMovie/CardMovie';
import cls from './ListMovies.module.scss';
import { getFilmArg, getFilmType } from '../types/ListMoviesTypes';

export const ListMovies = memo(() => {
    const filmApi = rtkApi.injectEndpoints({
        endpoints: (build) => ({
            getFilm: build.query<getFilmType, getFilmArg>({
                query: ({ limit, page }) => ({
                    url: `movie?page=${page}&limit=${limit}`,
                }),
            }),
        }),

    });

    const { useGetFilmQuery } = filmApi;

    const { data: films, isLoading } = useGetFilmQuery({ page: 1, limit: 5 });

    if (isLoading) {
        <Grid className={cls.filmGrid}>
            <Loader />
        </Grid>;
    }

    return (
        <Grid className={cls.filmGrid}>
            {
                films?.docs.map((film) => (
                    <CardMovie
                        key={film.id}
                        filmInfo={film}
                    />
                ))
            }
        </Grid>
    );
});
