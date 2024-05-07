import { FilmCard } from 'entities/Films';
import { memo } from 'react';
import { useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { Grid } from 'shared/ui/Grid/Grid';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { filmType } from '../../model/types/filmFiltersTypes';
import {
    getFilmSelectCountryFilterValue,
    getFilmSelectGenreFilterValue,
    getFilmSelectReleaseFilterValue,
    getFilmSelectSortValue,
} from '../../model/selectors/filmFIltersSelectors/filmFiltersSelectors';
import { useGetFilmQuery } from '../../api/filmApi/filmApi';
import cls from './FilmsList.module.scss';
import { FilmsFilters } from '../FilmsFilters/FilmsFilters';

interface FilmsListProps{
    filmType: filmType;
}

export const FilmsList = memo((props: FilmsListProps) => {
    const {
        filmType,
    } = props;

    const filmSort = useAppSelector(getFilmSelectSortValue);
    const filmFilterGenre = useAppSelector(getFilmSelectGenreFilterValue);
    const filmFilterCountry = useAppSelector(getFilmSelectCountryFilterValue);
    const filmFilterRelease = useAppSelector(getFilmSelectReleaseFilterValue);

    const { data: films, isLoading, isFetching } = useGetFilmQuery({
        page: 1,
        limit: 10,
        filmType,
        filmSort,
        filmFilterGenre,
        filmFilterCountry,
        filmFilterRelease,
    });

    if (isFetching) {
        return (
            <>
                <FilmsFilters
                    filmSort={filmSort}
                    filmFilterGenre={filmFilterGenre}
                    filmFilterCountry={filmFilterCountry}
                    filmFilterRelease={filmFilterRelease}
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
                filmFilterCountry={filmFilterCountry}
                filmFilterRelease={filmFilterRelease}
            />
            {
                films?.docs?.length ? (
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
                )
                    : (
                        <div className={cls.filmsNotFound}>
                            <span>Ничего не найдено :C</span>
                        </div>
                    )
            }
        </>
    );
});
