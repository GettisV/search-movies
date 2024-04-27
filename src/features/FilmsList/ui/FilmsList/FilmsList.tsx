import { FilmCard } from 'entities/Films';
import {
    FilmsFilters,
    filmType, getFilmSelectGenreFilterValue,
    getFilmSelectSortValue,
} from 'features/FilmsList';
import { memo } from 'react';
import { Grid } from 'shared/ui/Grid/Grid';
import { useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { useGetFilmQuery } from '../../api/filmApi/filmApi';
import cls from './FilmsList.module.scss';

interface FilmsListProps{
    filmType: filmType;
}

export const FilmsList = memo((props: FilmsListProps) => {
    const {
        filmType,
    } = props;

    const filmSort = useAppSelector(getFilmSelectSortValue);
    const filmFilterGenre = useAppSelector(getFilmSelectGenreFilterValue);

    const { data: films, isLoading, isFetching } = useGetFilmQuery({
        page: 1,
        limit: 10,
        filmType,
        filmSort,
        filmFilterGenre,
    });

    if (isFetching) {
        return (
            <>
                <FilmsFilters
                    filmSort={filmSort}
                    filmFilterGenre={filmFilterGenre}
                />
                <LoaderPage />
            </>
        );
    }

    return (
        <>
            <FilmsFilters
                filmSort={filmSort}
                filmFilterGenre={filmFilterGenre}
            />
            <Grid className={cls.filmsGrid}>
                {
                    films?.docs?.map((film) => (
                        <FilmCard
                            key={film.id}
                            filmInfo={film}
                        />
                    ))
                }
            </Grid>
        </>
    );
});
