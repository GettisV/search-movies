import { childrenRouteConfig } from 'App/Providers/RouterProvider';
import { filmsFiltersActions } from 'features/GetFilms';
import { memo, useCallback, useState } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { FilmsSearchModalWindow } from '../FilmsSearchModalWindow/FilmsSearchModalWindow';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => {
    const [stateModal, setStateModal] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const closeModalHandler = useCallback(() => {
        setStateModal(false);
    }, []);

    const showModalHandler = useCallback(() => {
        setStateModal(true);
    }, []);

    const searchInputChange = useCallback((value: string) => {
        dispatch(filmsFiltersActions.searchFilm(value));
    }, [dispatch]);

    return (
        <nav className={cls.navbar}>
            <div className={cls.applinks}>
                {
                    childrenRouteConfig.map(
                        (route) => (
                            <AppLink
                                to={route.path}
                                key={route.path}
                                text={route.text}
                            />
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
