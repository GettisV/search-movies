import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { classNames } from 'shared/lib/classNames';
import { filmsListActions } from '../../model/slices/filmFiltersSlice/filmFilterSlice';
import {
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions,
    filmSortSelectOptions,
} from '../../model/types/filmFiltersTypes';
import { FilmSelectFilterCountries } from '../FilmSelectFilterCountries/FilmSelectFilterCountries';
import { FilmSelectFilterGenre } from '../FilmSelectFilterGenre/FilmSelectFilterGenre';
import { FilmSelectFilterRelease } from '../FilmSelectFilterRelease/FilmSelectFilterRelease';
import { FilmSelectSort } from '../FilmSelectSort/FilmSelectSort';
import cls from './FilmsFilters.module.scss';

interface FilmFiltersType{
    className?: string;
    filmSort: filmSortSelectOptions;
    filmFilterGenre: filmGenreFilterSelectOptions,
    filmFilterCountry: filmCountriesFilterSelectOptions,
    filmFilterRelease: string,
}

export const FilmsFilters = memo((props: FilmFiltersType) => {
    const {
        className,
        filmSort,
        filmFilterGenre,
        filmFilterCountry,
        filmFilterRelease,
    } = props;

    const dispatch = useAppDispatch();

    const onChangeSort = useCallback((value: filmSortSelectOptions) => {
        dispatch(filmsListActions.sortSelect(value));
    }, [dispatch]);

    const onChangeFilterGenre = useCallback((value: filmGenreFilterSelectOptions) => {
        dispatch(filmsListActions.genreFilter(value));
    }, [dispatch]);

    const onChangeFilterCountries = useCallback((value: filmCountriesFilterSelectOptions) => {
        dispatch(filmsListActions.countriesFilter(value));
    }, [dispatch]);

    // значения объекта filmReleaseFilterSelectOptions
    const onChangeFilterRelease = useCallback((value: string) => {
        dispatch(filmsListActions.releasedFilter(value));
    }, [dispatch]);

    return (
        <div className={classNames(cls.filmFilters, {}, [className])}>
            <FilmSelectSort
                onChange={onChangeSort}
                filmSort={filmSort}
            />
            <FilmSelectFilterGenre
                onChange={onChangeFilterGenre}
                filmFilterGenre={filmFilterGenre}
            />
            <FilmSelectFilterCountries
                onChange={onChangeFilterCountries}
                filmFilterCountry={filmFilterCountry}
            />
            <FilmSelectFilterRelease
                onChange={onChangeFilterRelease}
                filmFilterRelease={filmFilterRelease}
            />
        </div>
    );
});
