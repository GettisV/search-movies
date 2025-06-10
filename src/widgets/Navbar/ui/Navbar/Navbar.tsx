import { childrenRouteConfig, RoutePath } from 'App/Providers/Router';
import { filmApi } from 'features/GetFilms/api/filmApi/filmApi';
import { memo, useCallback, useState } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import logo from 'shared/assets/logo.png';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useSearchParams } from 'react-router-dom';
import { FIELDS_SEARCH_PARAMS } from 'features/GetFilms';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const [stateModal, setStateModal] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useAppDispatch();

    // const closeModalHandler = useCallback(() => {
    //     dispatch(filmSearchApi.util.resetApiState());
    //     dispatch(filmsFiltersActions.searchFilm(''));
    //     setStateModal(false);
    // }, [dispatch]);

    const showModalHandler = useCallback(() => {
        setStateModal(true);
    }, []);

    // const searchInputChange = useCallback((value: string) => {
    //     dispatch(filmsFiltersActions.searchFilm(value));
    // }, [dispatch]);

    const onClickHandler = useCallback(() => {
        dispatch(filmApi.util.resetApiState());
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.page, '1');

            return newParams;
        });
    }, [dispatch, setSearchParams]);

    return (
        <nav className={cls.navbar}>
            <div className={cls.applinks}>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.BOX_LINK}>
                    <img className={cls.logo} src={logo} alt="logo" />
                </AppLink>
                {
                    childrenRouteConfig.map(
                        (route) => route.navbar && (
                            <AppLink
                                to={route.path || ''}
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
                // onClick={showModalHandler}
            >
                <SearchIcon className={cls.searchImg} />
            </button>

            {/* <FilmsSearchModalWindow
                stateModal={stateModal}
                closeModal={closeModalHandler}
                onChangeInput={searchInputChange}
            /> */}
        </nav>
    );
});
