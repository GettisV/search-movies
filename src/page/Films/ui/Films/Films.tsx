import {
    filmType,
} from 'entities/Films';
import {
    FIELDS_SEARCH_PARAMS,
    useFilmQueryFromURL,
    useGetFilmQuery,
    filmApi,
    DEFAULT_VALUES_SEARCH_PARAMS,
    clbSearchParams,
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

            setSearchParams((prev) => clbSearchParams('', [
                { field: FIELDS_SEARCH_PARAMS.type, value: filmType },
                { field: FIELDS_SEARCH_PARAMS.page, value: DEFAULT_VALUES_SEARCH_PARAMS.page.toString() },
            ]), { replace: true });
        }
    }, [filmType, currentUrlType, setSearchParams, dispatch]);

    const onScrollEnd = useCallback(() => {
        if (films.length && !isFetching && (page <= maxPages)) {
            setSearchParams((prev) => clbSearchParams(prev, [
                { field: FIELDS_SEARCH_PARAMS.page, value: String(page + 1) },
            ]), { replace: true });
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
