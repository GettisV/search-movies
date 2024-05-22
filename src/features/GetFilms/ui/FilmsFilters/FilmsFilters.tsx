import {
    FilmSelectFilterCountries,
    FilmSelectFilterGenre,
    FilmSelectFilterRelease,
    FilmSelectSort,
    filmActions,
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions,
    filmReleaseFilterSelectOptions,
    filmSortSelectOptions,
    filmType,
    getPage,
} from 'entities/Films';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { classNames } from 'shared/lib/classNames';
import { filmApi, useGetFilmQuery } from '../../api/filmApi/filmApi';
import {
    getFilmSelectCountryFilterValue,
    getFilmSelectGenreFilterValue,
    getFilmSelectReleaseFilterValue,
    getFilmSelectSortValue,
} from '../../model/selectors/filmFIltersSelectors/filmFiltersSelectors';
import { filmsFiltersActions } from '../../model/slices/filmsFiltersSlice/filmsFiltersSlice';
import cls from './FilmsFilters.module.scss';

interface FilmFiltersType{
    className?: string;
    filmType: filmType;
}

export const FilmsFilters = memo((props: FilmFiltersType) => {
    const {
        className,
        filmType,
    } = props;

    const dispatch = useAppDispatch();

    const filmSort = useAppSelector(getFilmSelectSortValue);
    const filmFilterGenre = useAppSelector(getFilmSelectGenreFilterValue);
    const filmFilterCountry = useAppSelector(getFilmSelectCountryFilterValue);
    const filmFilterRelease = useAppSelector(getFilmSelectReleaseFilterValue);
    const filmPage = useAppSelector(getPage);
    const filmLimit = 20;

    const {
        data, isLoading, isFetching, isSuccess,
    } = useGetFilmQuery({
        page: filmPage,
        limit: filmLimit,
        filmType,
        filmSort,
        filmFilterGenre,
        filmFilterCountry,
        filmFilterRelease,
    });

    useEffect(() => {
        dispatch(filmActions.setIsLoading(isLoading));
        dispatch(filmActions.setIsFetching(isFetching));
        dispatch(filmActions.setIsSuccess(isSuccess));
        dispatch(filmActions.setFilmResponse(data));
    }, [data, dispatch, isFetching, isLoading, isSuccess]);

    useEffect(() => {
        dispatch(filmsFiltersActions.sortSelect(filmSortSelectOptions.dateBy));
        dispatch(filmsFiltersActions.genreFilter(filmGenreFilterSelectOptions.all));
        dispatch(filmsFiltersActions.countriesFilter(filmCountriesFilterSelectOptions.all));
        dispatch(filmsFiltersActions.releasedFilter(filmReleaseFilterSelectOptions.all));
    }, [dispatch, filmType]);

    const onChangeSort = useCallback((value: filmSortSelectOptions) => {
        dispatch(filmApi.util.resetApiState());
        dispatch(filmActions.setPage(1));
        dispatch(filmActions.setFilmResponse(undefined));

        dispatch(filmsFiltersActions.sortSelect(value));
    }, [dispatch]);

    const onChangeFilterGenre = useCallback((value: filmGenreFilterSelectOptions) => {
        dispatch(filmApi.util.resetApiState());
        dispatch(filmActions.setPage(1));
        dispatch(filmActions.setFilmResponse(undefined));

        dispatch(filmsFiltersActions.genreFilter(value));
    }, [dispatch]);

    const onChangeFilterCountries = useCallback((value: filmCountriesFilterSelectOptions) => {
        dispatch(filmApi.util.resetApiState());
        dispatch(filmActions.setPage(1));
        dispatch(filmActions.setFilmResponse(undefined));

        dispatch(filmsFiltersActions.countriesFilter(value));
    }, [dispatch]);

    // значения объекта filmReleaseFilterSelectOptions
    const onChangeFilterRelease = useCallback((value: string) => {
        dispatch(filmApi.util.resetApiState());
        dispatch(filmActions.setPage(1));
        dispatch(filmActions.setFilmResponse(undefined));

        dispatch(filmsFiltersActions.releasedFilter(value));
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
