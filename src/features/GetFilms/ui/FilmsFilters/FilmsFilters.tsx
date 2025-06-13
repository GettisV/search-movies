import {
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions, filmSortSelectOptions,
} from 'entities/Films';
import { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    countriesOptions, genresOptions, releaseOptions, sortOptions,
} from 'shared/constants/selectOptions';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select/Select';
import { DEFAULT_VALUES_SEARCH_PARAMS, FIELDS_SEARCH_PARAMS } from 'features/GetFilms/consts/VALUES_FIELDS_SEARCH_PARAMS';
import { clbSearchParams } from 'features/GetFilms/lib/clbSearchParams';
import { filmApi } from '../../api/filmApi/filmApi';
import cls from './FilmsFilters.module.scss';

interface FilmFiltersType{
    className?: string;
}

export const FilmsFilters = memo((props: FilmFiltersType) => {
    const {
        className,
    } = props;
    const [_, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    const onChangeSort = useCallback((value: filmSortSelectOptions) => {
        dispatch(filmApi.util.resetApiState());
        setSearchParams((prev) => clbSearchParams(prev, [
            { field: FIELDS_SEARCH_PARAMS.page, value: DEFAULT_VALUES_SEARCH_PARAMS.page.toString() },
            { field: FIELDS_SEARCH_PARAMS.sortType, value },
        ]));
    }, [dispatch, setSearchParams]);

    const onChangeFilterGenre = useCallback((value: filmGenreFilterSelectOptions) => {
        dispatch(filmApi.util.resetApiState());
        setSearchParams((prev) => clbSearchParams(prev, [
            { field: FIELDS_SEARCH_PARAMS.page, value: DEFAULT_VALUES_SEARCH_PARAMS.page.toString() },
            { field: FIELDS_SEARCH_PARAMS.genres, value },
        ]));
    }, [dispatch, setSearchParams]);

    const onChangeFilterCountries = useCallback((value: filmCountriesFilterSelectOptions) => {
        dispatch(filmApi.util.resetApiState());
        setSearchParams((prev) => clbSearchParams(prev, [
            { field: FIELDS_SEARCH_PARAMS.page, value: DEFAULT_VALUES_SEARCH_PARAMS.page.toString() },
            { field: FIELDS_SEARCH_PARAMS.countries, value },
        ]));
    }, [dispatch, setSearchParams]);

    const onChangeFilterRelease = useCallback((value: string) => {
        dispatch(filmApi.util.resetApiState());
        setSearchParams((prev) => clbSearchParams(prev, [
            { field: FIELDS_SEARCH_PARAMS.page, value: DEFAULT_VALUES_SEARCH_PARAMS.page.toString() },
            { field: FIELDS_SEARCH_PARAMS.year, value },
        ]));
    }, [dispatch, setSearchParams]);

    return (
        <div className={classNames(cls.filmFilters, {}, [className])}>
            <Select<filmSortSelectOptions>
                className={cls.select}
                onChange={onChangeSort}
                options={sortOptions}
            />
            <Select<filmGenreFilterSelectOptions>
                className={cls.select}
                onChange={onChangeFilterGenre}
                options={genresOptions}
            />
            <Select<filmCountriesFilterSelectOptions>
                className={cls.select}
                onChange={onChangeFilterCountries}
                options={countriesOptions}
            />
            <Select<string>
                className={cls.select}
                onChange={onChangeFilterRelease}
                options={releaseOptions}
            />
        </div>
    );
});
