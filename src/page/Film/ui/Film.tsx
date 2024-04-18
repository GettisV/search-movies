import { ListMovies } from 'features/ListMovies/ListMovies';
import { memo } from 'react';

const Film = memo(() => (
    <ListMovies />
));

export default Film;
