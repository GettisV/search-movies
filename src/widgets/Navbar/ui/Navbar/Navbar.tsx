import { childrenRouteConfig, RoutePath } from 'App/Providers/Router';
import { filmApi, useLazyGetSearchQuery } from 'features/GetFilms/api/filmApi/filmApi';
import { memo, useCallback, useState } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import logo from 'shared/assets/logo.png';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import cls from './Navbar.module.scss';
import { FilmsSearchModalWindow } from '../FilmsSearchModalWindow/FilmsSearchModalWindow';

export const Navbar = memo(() => {
    const [stateModal, setStateModal] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const [trigger, { data, isLoading }] = useLazyGetSearchQuery();
    const [filmSearchInput, setFilmSearchInput] = useState<string>('');
    const LIMIT = 10;

    const closeModalHandler = useCallback(() => {
        // dispatch(filmApi.util.resetApiState());
        setStateModal(false);
        setFilmSearchInput('');
    }, []);

    const showModalHandler = useCallback(() => {
        setStateModal(true);
    }, []);

    const debouncedOnChangeFilmSearchInput = useDebounce((value) => trigger({
        query: value,
        limit: LIMIT,
    }), 500);

    const onChangeFilmSearchInput = useCallback((value: string) => {
        setFilmSearchInput(value);

        if (value) {
            debouncedOnChangeFilmSearchInput(value);
        }
    }, [debouncedOnChangeFilmSearchInput]);

    const onClickHandler = useCallback(() => {
        dispatch(filmApi.util.resetApiState());
    }, [dispatch]);

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
                                key={route.path || `key${Math.random() * 1e6}`}
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
                data={data}
                isLoading={isLoading}
                stateModal={stateModal}
                closeModal={closeModalHandler}
                filmSearchInput={filmSearchInput}
                onChangeFilmSearchInput={onChangeFilmSearchInput}
            />
        </nav>
    );
});
