import { FilmsList } from 'features/FilmsList';
import { memo } from 'react';
import { filmType } from '../../../../features/FilmsList/model/types/filmFiltersTypes';

interface FilmsProps{
    filmType: filmType;
}

const Films = memo((props: FilmsProps) => {
    const {
        filmType,
    } = props;

    return (
        <FilmsList filmType={filmType} />
    );
});

export default Films;
