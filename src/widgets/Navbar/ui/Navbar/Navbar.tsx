import { childrenRouteConfig } from 'App/Providers/RouterProvider';
import {
    filmActions,
    filmCountriesFilterSelectOptions,
    filmGenreFilterSelectOptions,
    filmReleaseFilterSelectOptions,
    filmSortSelectOptions,
} from 'entities/Films';
import { filmsFiltersActions } from 'features/GetFilms';
import { filmApi } from 'features/GetFilms/api/filmApi/filmApi';
import { filmSearchApi } from 'features/GetFilms/api/filmApi/filmSearchApi';
import { memo, useCallback, useState } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { FilmsSearchModalWindow } from '../FilmsSearchModalWindow/FilmsSearchModalWindow';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const [stateModal, setStateModal] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const closeModalHandler = useCallback(() => {
        dispatch(filmSearchApi.util.resetApiState());
        dispatch(filmsFiltersActions.searchFilm(''));
        setStateModal(false);
    }, [dispatch]);

    const showModalHandler = useCallback(() => {
        setStateModal(true);
    }, []);

    const searchInputChange = useCallback((value: string) => {
        dispatch(filmsFiltersActions.searchFilm(value));
    }, [dispatch]);

    const onClickHandler = useCallback(() => {
        dispatch(filmApi.util.resetApiState());
        dispatch(filmActions.setPage(1));
        dispatch(filmsFiltersActions.genreFilter(filmGenreFilterSelectOptions.all));
        dispatch(filmsFiltersActions.sortSelect(filmSortSelectOptions.dateBy));
        dispatch(filmsFiltersActions.countriesFilter(filmCountriesFilterSelectOptions.all));
        dispatch(filmsFiltersActions.releasedFilter(filmReleaseFilterSelectOptions.all));
    }, [dispatch]);

    return (
        <nav className={cls.navbar}>
            <div className={cls.applinks}>
                {
                    childrenRouteConfig.map(
                        (route) => route.navbar && (
                            <AppLink
                                to={route.path}
                                key={route.path}
                                onClick={onClickHandler}
                                theme={AppLinkThemes.APP_LINK}
                                hasActive
                            >
                                { route.text}
                            </AppLink>
                        ),
                    )
                }
            </div>
            <button
                type="button"
                aria-label="search"
                className={cls.searchButton}
                onClick={showModalHandler}
            >
                <SearchIcon className={cls.searchImg} />
            </button>

            <FilmsSearchModalWindow
                stateModal={stateModal}
                closeModal={closeModalHandler}
                onChangeInput={searchInputChange}
            />
        </nav>
    );
});
