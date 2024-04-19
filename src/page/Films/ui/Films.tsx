import { FilmsList } from 'features/FilmsList';
import { memo } from 'react';
import { useLocation } from 'react-router-dom';

const Films = memo(() => {
    const location = useLocation();

    return <FilmsList typeFilm={location.pathname} />;
});

export default Films;
