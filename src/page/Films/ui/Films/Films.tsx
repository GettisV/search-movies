import {
    filmType,
} from 'entities/Films';
import {
    FIELDS_SEARCH_PARAMS, useFilmQueryFromURL, useGetFilmQuery,
} from 'features/GetFilms';
import { memo, useCallback, useEffect } from 'react';
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

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);

            newParams.set(FIELDS_SEARCH_PARAMS.type, filmType);

            return newParams;
        });
    }, [filmType, setSearchParams]);

    const dispatch = useAppDispatch();

    const queryArgs = useFilmQueryFromURL();
    const { data, isFetching } = useGetFilmQuery(queryArgs);
    const films = data?.docs || [];
    const page = Number(searchParams.get(FIELDS_SEARCH_PARAMS.page));
    const maxPages = data?.pages || 1;

    const paramsPage = {
        infiniteScrollIsWork: true,
    };

    const onScrollEnd = useCallback(() => {
        if (films.length && !isFetching && (page <= maxPages!)) {
            setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);

                newParams.set(FIELDS_SEARCH_PARAMS.page, String(page + 1));

                return newParams;
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isFetching, films]);

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
