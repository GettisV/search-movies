import {
    FilmsGrid,
    filmType,
    getFilmsResponse,
    getIsFetching,
} from 'entities/Films';
import {
    FilmsFilters,
} from 'features/GetFilms';
import { memo } from 'react';
import { useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { classNames } from 'shared/lib/classNames';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import cls from './FilmsList.module.scss';

interface FilmsListType{
    filmType: filmType,
    className?: string;
}

export const FilmsList = memo((props: FilmsListType) => {
    const {
        filmType,
        className,
    } = props;

    const data = useAppSelector(getFilmsResponse);
    const isFetching = useAppSelector(getIsFetching);

    return (
        <div className={classNames(cls.filmsList, {}, [className])}>
            <FilmsFilters
                filmType={filmType}
            />
            {
                isFetching
                    ? <LoaderPage />
                    : <FilmsGrid films={data} />
            }
        </div>
    );
});
