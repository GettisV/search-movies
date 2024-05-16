import { FilmCard } from 'entities/Films';
import { memo } from 'react';
import { Grid } from 'shared/ui/Grid/Grid';
import { filmResponseServerType } from 'features/GetFilms';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import cls from './FilmsGrid.module.scss';

interface FilmsListProps{
    films: filmResponseServerType | undefined,
}

export const FilmsGrid = memo((props: FilmsListProps) => {
    const {
        films,
    } = props;

    function getGridFilms() {
        if (films?.docs?.length === undefined) {
            return <LoaderPage />;
        }

        if (films?.docs?.length === 0) {
            return <div className={cls.filmsNotFound}>Ничего не найдено =(</div>;
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
    }

    return (
        <div>
            {
                getGridFilms()
            }
        </div>
    );
});
