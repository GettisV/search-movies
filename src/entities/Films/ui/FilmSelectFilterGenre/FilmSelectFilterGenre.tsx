import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select, selectOptionsType } from 'shared/ui/Select/Select';
import { filmGenreFilterSelectOptions } from '../../model/types/filmFiltersTypes';
import cls from './FilmSelectFilterGenre.module.scss';

interface FilmSelectFilterGenreType{
    className?: string;
    onChange: (value: filmGenreFilterSelectOptions) => void,
    filmFilterGenre: filmGenreFilterSelectOptions
}

export const FilmSelectFilterGenre = memo((props: FilmSelectFilterGenreType) => {
    const {
        className,
        onChange,
        filmFilterGenre,
    } = props;

    const genresOptions: selectOptionsType<filmGenreFilterSelectOptions>[] = [
        { value: filmGenreFilterSelectOptions.all, content: 'Все жанры' },
        { value: filmGenreFilterSelectOptions.action, content: 'Боевик' },
        { value: filmGenreFilterSelectOptions.adventures, content: 'Приключения' },
        { value: filmGenreFilterSelectOptions.biography, content: 'Биография' },
        { value: filmGenreFilterSelectOptions.comedy, content: 'Комедия' },
        { value: filmGenreFilterSelectOptions.concert, content: 'Концерт' },
        { value: filmGenreFilterSelectOptions.crime, content: 'Криминал' },
        { value: filmGenreFilterSelectOptions.detective, content: 'Детектив' },
        { value: filmGenreFilterSelectOptions.drama, content: 'Драма' },
        { value: filmGenreFilterSelectOptions.family, content: 'Семейный' },
        { value: filmGenreFilterSelectOptions.fantastic, content: 'Фантастика' },
        { value: filmGenreFilterSelectOptions.fantasy, content: 'Фэнтези' },
        { value: filmGenreFilterSelectOptions.history, content: 'История' },
        { value: filmGenreFilterSelectOptions.horror, content: 'Ужасы' },
        { value: filmGenreFilterSelectOptions.melodrama, content: 'Мелодрама' },
        { value: filmGenreFilterSelectOptions.military, content: 'Военный' },
    ];

    return (
        <div className={classNames(cls.filmFilterGenre, {}, [className])}>
            <Select<filmGenreFilterSelectOptions>
                value={filmFilterGenre}
                onChange={onChange}
                options={genresOptions}
            />
        </div>
    );
});
