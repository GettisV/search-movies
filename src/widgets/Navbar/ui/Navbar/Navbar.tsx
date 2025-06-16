import { RoutePath } from 'App/Providers/Router';
import { filmApi, useLazyGetSearchQuery } from 'features/GetFilms/api/filmApi/filmApi';
import { memo, useCallback, useState } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import logo from 'shared/assets/logo.png';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import getNavbarItemsMenu from '../../lib/getNavbarItemsMenu';
import { FilmsSearchModalWindow } from '../FilmsSearchModalWindow/FilmsSearchModalWindow';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const [stateModal, setStateModal] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const [trigger, {
        data, isFetching, isSuccess, reset,
    }] = useLazyGetSearchQuery();
    const [filmSearchInput, setFilmSearchInput] = useState<string>('');
    const LIMIT = 10;

    const closeModalHandler = useCallback(() => {
        setStateModal(false);
        reset();
        setFilmSearchInput('');
    }, [reset]);

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

    const navbarItemsMenu = getNavbarItemsMenu();

    return (
        <nav className={cls.navbar}>
            <div className={cls.applinks}>
                <AppLink to={RoutePath.main} theme={AppLinkThemes.BOX_LINK}>
                    <img className={cls.logo} src={logo} alt="logo" />
                </AppLink>
                {
                    navbarItemsMenu.map(
                        (item) => (
                            <AppLink
                                to={item.path || ''}
                                key={item.path || `key${Math.random() * 1e6}`}
                                onClick={onClickHandler}
                                theme={AppLinkThemes.APP_LINK}
                                hasActive
                            >
                                { item.text || ''}
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
            {stateModal
            && (
                <FilmsSearchModalWindow
                    data={data}
                    isFetching={isFetching}
                    isSuccess={isSuccess}
                    stateModal={stateModal}
                    closeModal={closeModalHandler}
                    filmSearchInput={filmSearchInput}
                    onChangeFilmSearchInput={onChangeFilmSearchInput}
                />
            )}
        </nav>
    );
});
