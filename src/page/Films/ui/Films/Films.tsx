import { filmType } from 'entities/Films';
import { memo } from 'react';
import { FilmsList } from 'widgets/FilmsList';

interface FilmsProps{
    filmType: filmType;
}

const Films = memo((props: FilmsProps) => {
    const {
        filmType,
    } = props;

    return (
        <FilmsList
            filmType={filmType}
        />
    );
});

export default Films;
