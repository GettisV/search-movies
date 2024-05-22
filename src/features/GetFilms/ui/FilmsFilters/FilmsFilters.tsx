import {
    FilmSelectFilterCountries,
    FilmSelectFilterGenre,
    FilmSelectFilterRelease,
    FilmSelectSort, filmActions, filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions, filmSortSelectOptions,
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

    const resetFilmsStore = useCallback(() => {
        dispatch(filmApi.util.resetApiState());
        dispatch(filmActions.setPage(1));
        dispatch(filmActions.setFilmResponse(undefined));
    }, [dispatch]);

    const {
        data,
        isLoading,
        isFetching,
        isSuccess,
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

    const onChangeSort = useCallback((value: filmSortSelectOptions) => {
        resetFilmsStore();
        dispatch(filmsFiltersActions.sortSelect(value));
    }, [dispatch, resetFilmsStore]);

    const onChangeFilterGenre = useCallback((value: filmGenreFilterSelectOptions) => {
        resetFilmsStore();
        dispatch(filmsFiltersActions.genreFilter(value));
    }, [dispatch, resetFilmsStore]);

    const onChangeFilterCountries = useCallback((value: filmCountriesFilterSelectOptions) => {
        resetFilmsStore();
        dispatch(filmsFiltersActions.countriesFilter(value));
    }, [dispatch, resetFilmsStore]);

    // значения объекта filmReleaseFilterSelectOptions
    const onChangeFilterRelease = useCallback((value: string) => {
        resetFilmsStore();
        dispatch(filmsFiltersActions.releasedFilter(value));
    }, [dispatch, resetFilmsStore]);

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
