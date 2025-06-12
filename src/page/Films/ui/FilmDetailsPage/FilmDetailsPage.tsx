import { FilmInfo } from 'entities/FilmDetails';
import { filmTypeResponseServer } from 'features/GetFilms';
import { memo } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

interface FilmDetailsPageType{
    className?: string;
}

const FilmDetailsPage = memo((props: FilmDetailsPageType) => {
    const {
        className,
    } = props;

    const data: Location<filmTypeResponseServer> = useLocation();

    return (
        <div className={classNames('', {}, [className])}>
            <FilmInfo film={data.state} />
        </div>
    );
});

export default FilmDetailsPage;
