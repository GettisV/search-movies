import { ListMovies } from 'features/ListMovies/ui/ListMovies';
import { memo } from 'react';

const Film = memo(() => (
    <ListMovies />
));

export default Film;
