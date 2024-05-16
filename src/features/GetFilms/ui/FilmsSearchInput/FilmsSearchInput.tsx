import { filmActions } from 'entities/Films';
import { useLazyGetSearchFilmQuery } from 'features/GetFilms';
import { memo, useEffect } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useAppDispatch, useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { useDebounce } from 'shared/hooks/useDebounce';
import { cancelEventBubbling } from 'shared/lib/cancelEventBubbling';
import { Input } from 'shared/ui/Input/Input';
import { filmSearchApi } from 'features/GetFilms/api/filmApi/filmSearchApi';
import { getFilmSearchValue } from '../../model/selectors/filmFIltersSelectors/filmFiltersSelectors';
import cls from './FIlmsSearchInput.module.scss';

interface FIlmsSearchInputType{
    className?: string;
    onChangeInput?: (value:string) => void
}

export const FilmsSearchInput = memo((props: FIlmsSearchInputType) => {
    const {
        className,
        onChangeInput,
    } = props;

    const [trigger, { data, isLoading, isFetching }] = useLazyGetSearchFilmQuery();
    const querySearchFilms = useDebounce(trigger, 2000);
    const searchInput = useAppSelector(getFilmSearchValue);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!searchInput) {
            dispatch(filmSearchApi.util.resetApiState());
            dispatch(filmActions.setFilmResponseSearch(undefined));
        }

        if (searchInput) {
            dispatch(filmActions.setFilmResponseSearch(data));
        }

        dispatch(filmActions.setIsLoading(isLoading));
        dispatch(filmActions.setIsFetching(isFetching));
    }, [data, dispatch, isFetching, isLoading, searchInput]);

    const onChangeInputHandler = (value: string) => {
        onChangeInput?.(value);

        if (value) {
            querySearchFilms({ searchText: value });
        }
    };

    return (
        <div
            onClick={cancelEventBubbling}
            className={cls.searchWrapper}
            aria-hidden="true"
        >
            <SearchIcon onClick={cancelEventBubbling} className={cls.searchIcon} />
            <Input
                value={searchInput}
                type="text"
                className={cls.input}
                placeholder="Название фильма"
                onClick={cancelEventBubbling}
                onChange={onChangeInputHandler}
            />
        </div>
    );
});
