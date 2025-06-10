import {
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions, filmSortSelectOptions,
} from 'entities/Films';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    countriesOptions, genresOptions, releaseOptions, sortOptions,
} from 'shared/constants/selectOptions';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select/Select';
import { FIELDS_SEARCH_PARAMS } from 'features/GetFilms/consts/VALUES_FIELDS_SEARCH_PARAMS';
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

    const resetFilmsStore = useCallback(() => {
        dispatch(filmApi.util.resetApiState());
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.page, '1');

            return newParams;
        });
    }, [dispatch, setSearchParams]);

    const onChangeSort = useCallback((value: filmSortSelectOptions) => {
        resetFilmsStore();
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.sortType, value);

            return newParams;
        });
    }, [resetFilmsStore, setSearchParams]);

    const onChangeFilterGenre = useCallback((value: filmGenreFilterSelectOptions) => {
        resetFilmsStore();
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.genres, value);

            return newParams;
        });
    }, [resetFilmsStore, setSearchParams]);

    const onChangeFilterCountries = useCallback((value: filmCountriesFilterSelectOptions) => {
        resetFilmsStore();
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.countries, value);

            return newParams;
        });
    }, [resetFilmsStore, setSearchParams]);

    const onChangeFilterRelease = useCallback((value: string) => {
        resetFilmsStore();
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.year, value);

            return newParams;
        });
    }, [resetFilmsStore, setSearchParams]);

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
