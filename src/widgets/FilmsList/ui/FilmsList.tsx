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
import Loader from 'shared/ui/Loader/Loader';
import cls from './FilmsList.module.scss';

interface FilmsListType{
    filmType: filmType,
    className?: string,
}

export const FilmsList = memo((props: FilmsListType) => {
    const {
        filmType,
        className,
    } = props;

    const data = useAppSelector(getFilmsResponse);
    const isFetching = useAppSelector(getIsFetching);

    return (
        <section
            className={classNames('', {}, [className])}
        >
            <FilmsFilters
                filmType={filmType}
            />
            <FilmsGrid films={data} />
            {
                isFetching && (
                    <div className={cls.loaderBlock}>
                        <Loader />
                    </div>
                )
            }
        </section>
    );
});
