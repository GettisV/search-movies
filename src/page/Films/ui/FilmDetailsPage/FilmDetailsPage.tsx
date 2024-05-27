import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useParams } from 'react-router-dom';
import { FilmInfo } from 'entities/FilmDetails';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { useGetFilmDetaisQuery } from '../../api/filmDetailsApi';
import cls from './FilmDetailsPage.module.scss';

interface FilmDetailsPageType{
    className?: string;
}

const FilmDetailsPage = memo((props: FilmDetailsPageType) => {
    const {
        className,
    } = props;

    const { id } = useParams();
    const { data, isFetching } = useGetFilmDetaisQuery({ id });

    if (isFetching) return <LoaderPage />;

    return (
        <div className={classNames('', {}, [className])}>
            <FilmInfo film={data} />
        </div>
    );
});

export default FilmDetailsPage;
