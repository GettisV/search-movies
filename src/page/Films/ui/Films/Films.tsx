import {
    filmActions,
    filmType,
    getFilmsIsFetching,
    getFilmsResponse,
    getPage,
} from 'entities/Films';
import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
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

    const data = useAppSelector(getFilmsResponse);
    const dataIsExist = Boolean(data?.docs.length);

    const page = useAppSelector(getPage);
    const isFetching = useAppSelector(getFilmsIsFetching);

    const paramsPage = {
        infiniteScrollIsWork: dataIsExist,
    };

    const onScrollEnd = useCallback(() => {
        if (dataIsExist && !isFetching && (page <= data?.pages!)) {
            dispatch(filmActions.setPage(page + 1));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, isFetching, data]);

    return (
        <Page
            paramsPage={paramsPage}
            onScrollEnd={onScrollEnd}
        >
            <FilmsList
                filmType={filmType}
            />
        </Page>
    );
});

export default Films;
