import { filmResponseServerType } from 'features/GetFilms';
import { memo } from 'react';
import { useAppSelector } from 'shared/hooks/storeHooks/storeHooks';
import { Grid } from 'shared/ui/Grid/Grid';
import { FilmCard } from '../../ui/FilmCard/FilmCard';
import { getIsSuccess, getIsFetching } from '../../model/selectors/filmSelectors';
import cls from './FilmsGrid.module.scss';

interface FilmsListProps{
    films: filmResponseServerType | undefined,
}

export const FilmsGrid = memo((props: FilmsListProps) => {
    const {
        films,
    } = props;

    const isFetching = useAppSelector(getIsFetching);
    const isSuccess = useAppSelector(getIsSuccess);

    if (!Boolean(films?.docs?.length) && !isFetching && isSuccess) {
        return <div className={cls.filmsNotFound}>Фильмы не найдены :(</div>;
    }

    return (
        <Grid className={cls.filmsGrid}>
            {
                films?.docs?.map((film) => (
                    <FilmCard
                        key={film.id}
                        filmInfo={film}
                    />
                ))
            }
        </Grid>
    );
});
