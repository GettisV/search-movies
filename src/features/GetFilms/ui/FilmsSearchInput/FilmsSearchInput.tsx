import { filmActions } from 'entities/Films';
import { useLazyGetSearchFilmQuery } from 'features/GetFilms';
import { filmSearchApi } from 'features/GetFilms/api/filmApi/filmSearchApi';
import { memo, useEffect } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import { useAppDispatch, useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { cancelEventBubbling } from 'shared/lib/cancelEventBubbling';
import { classNames } from 'shared/lib/classNames';
import { Input } from 'shared/ui/Input/Input';
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

    const [trigger, {
        data,
        isLoading,
        isFetching,
        isSuccess,
    }] = useLazyGetSearchFilmQuery();
    const querySearchFilms = useDebounce(trigger, 1000);
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
        dispatch(filmActions.setIsSuccess(isSuccess));
    }, [data, dispatch, isFetching, isLoading, isSuccess, searchInput]);

    const onChangeInputHandler = (value: string) => {
        onChangeInput?.(value);
        dispatch(filmActions.setIsSuccess(false));

        if (value) {
            querySearchFilms({ searchText: value });
        }
    };

    return (
        <div
            onClick={cancelEventBubbling}
            className={classNames(cls.searchWrapper, {}, [className])}
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