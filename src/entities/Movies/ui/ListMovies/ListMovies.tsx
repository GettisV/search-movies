import { Grid } from 'shared/ui/Grid/Grid';
import { CardMovie } from '../CardMovie/CardMovie';
import cls from './ListMovies.module.scss';

export function ListMovies() {
    return (
        <Grid className={cls.filmGrid}>
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
            <CardMovie />
        </Grid>
    );
}
