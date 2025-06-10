import { filmTypeResponseServer } from 'features/GetFilms';
import { memo } from 'react';
import { Grid } from 'shared/ui/Grid/Grid';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'App/Providers/Router';
import { FilmCard } from '../../ui/FilmCard/FilmCard';
import cls from './FilmsGrid.module.scss';

interface FilmsListProps{
    films: filmTypeResponseServer[],
}

export const FilmsGrid = memo((props: FilmsListProps) => {
    const {
        films,
    } = props;

    return (
        <Grid className={cls.filmsGrid}>
            {
                films?.map((film) => (
                    <AppLink
                        key={film.id}
                        to={RoutePath.film_details + film.id}
                        theme={AppLinkThemes.BOX_LINK}
                    >
                        <FilmCard
                            urlPoster={film.poster}
                            filmInfo={film}
                            className={cls.card}
                            isCardOfGrid
                        />
                    </AppLink>
                ))
            }
        </Grid>
    );
});
