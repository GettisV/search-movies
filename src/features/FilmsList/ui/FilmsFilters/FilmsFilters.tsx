import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { filmsListActions } from '../../model/slices/filmFiltersSlice/filmFilterSlice';
import { filmSortSelectOptions, filmFilterSelectOptions } from '../../model/types/filmFiltersTypes';
import { FilmSelectFilterGenre } from '../FilmSelectFilterGenre/FilmSelectFilterGenre';
import { FilmSelectSort } from '../FilmSelectSort/FilmSelectSort';

interface FilmFiltersType{
    className?: string;
    filmSort: filmSortSelectOptions;
    filmFilterGenre: filmFilterSelectOptions
}

export const FilmsFilters = memo((props: FilmFiltersType) => {
    const {
        className,
        filmSort,
        filmFilterGenre,
    } = props;

    const dispatch = useAppDispatch();

    const onChangeSort = useCallback((value: filmSortSelectOptions) => {
        dispatch(filmsListActions.sortSelect(value));
    }, [dispatch]);

    const onChangeFilterGenre = useCallback((value: filmFilterSelectOptions) => {
        dispatch(filmsListActions.genreFilter(value));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <FilmSelectSort onChange={onChangeSort} filmSort={filmSort} />
            <FilmSelectFilterGenre onChange={onChangeFilterGenre} filmFilterGenre={filmFilterGenre} />
        </div>
    );
});
