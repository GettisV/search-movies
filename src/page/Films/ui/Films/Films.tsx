import {
    filmType,
} from 'entities/Films';
import {
    FIELDS_SEARCH_PARAMS,
    useFilmQueryFromURL,
    useGetFilmQuery,
    filmApi,
} from 'features/GetFilms';
import {
    memo, useCallback, useEffect,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/storeHooks/storeHooks';
import { Page } from 'shared/ui/Page/Page';
import { FilmsList } from 'widgets/FilmsList';

interface FilmsProps{
    filmType: filmType;
}

const Films = memo((props: FilmsProps) => {
    const {
        filmType,
    } = props;

    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const currentUrlType = searchParams.get(FIELDS_SEARCH_PARAMS.type);

    const queryArgs = useFilmQueryFromURL();

    const { isFetching, data } = useGetFilmQuery(queryArgs);
    const films = data?.docs || [];
    const page = Number(searchParams.get(FIELDS_SEARCH_PARAMS.page)) || 1;
    const maxPages = data?.pages || 1;

    const paramsPage = {
        infiniteScrollIsWork: true,
    };

    useEffect(() => {
        if (currentUrlType !== filmType) {
            dispatch(filmApi.util.resetApiState());

            setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);

                newParams.set(FIELDS_SEARCH_PARAMS.type, filmType);
                newParams.set(FIELDS_SEARCH_PARAMS.page, '1');

                return newParams;
            }, { replace: true });
        }
    }, [filmType, currentUrlType, setSearchParams, dispatch]);

    const onScrollEnd = useCallback(() => {
        if (films.length && !isFetching && (page <= maxPages)) {
            setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);

                newParams.set(FIELDS_SEARCH_PARAMS.page, String(page + 1));

                return newParams;
            });
        }
    }, [page, maxPages, films.length, isFetching, setSearchParams]);

    return (
        <Page
            paramsPage={paramsPage}
            onScrollEnd={onScrollEnd}
        >
            <FilmsList />
        </Page>
    );
});

export default Films;
