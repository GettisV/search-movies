import { Container } from 'widgets/Container';
import { FilmsGrid } from 'entities/Films';
import { classNames } from 'shared/lib/classNames';
import { filmResponseServerType } from 'features/GetFilms';
import { memo } from 'react';
import cls from './FilmsSearchModalGrid.module.scss';

interface IFilmsSearchModalGridType{
    className?: string;
    films: filmResponseServerType
}

export const FilmsSearchModalGrid = memo((props: IFilmsSearchModalGridType) => {
    const { className, films } = props;
    const data = films?.docs || [];

    return (
        <Container>
            <div
                className={classNames(cls.FilmsSearchModalGrid, {}, [className])}
            >
                <FilmsGrid films={data} />
            </div>
        </Container>
    );
});
