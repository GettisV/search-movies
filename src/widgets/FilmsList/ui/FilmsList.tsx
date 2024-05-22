import {
    FilmsGrid,
    filmType,
    getFilmsResponse,
    getFilmsIsFetching,
    getFilmsIsSuccess,
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
    const isFetching = useAppSelector(getFilmsIsFetching);
    const isSuccess = useAppSelector(getFilmsIsSuccess);

    return (
        <section
            className={classNames('', {}, [className])}
        >
            <FilmsFilters
                filmType={filmType}
            />
            <FilmsGrid films={data} />
            {
                !Boolean(data?.docs?.length)
                && !isFetching
                && isSuccess
                && <div className={cls.filmsNotFound}>Фильмы не найдены :(</div>
            }
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
