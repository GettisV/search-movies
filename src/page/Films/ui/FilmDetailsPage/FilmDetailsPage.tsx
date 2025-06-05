import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useParams } from 'react-router-dom';
import { FilmInfo } from 'entities/FilmDetails';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { useGetFilmsDetailsQuery } from 'features/GetFilms';

interface FilmDetailsPageType{
    className?: string;
}

const FilmDetailsPage = memo((props: FilmDetailsPageType) => {
    const {
        className,
    } = props;

    const { id } = useParams();
    const { data, isFetching } = useGetFilmsDetailsQuery({ id });

    if (isFetching) return <LoaderPage />;

    return (
        <div className={classNames('', {}, [className])}>
            <FilmInfo film={data} />
        </div>
    );
});

export default FilmDetailsPage;
