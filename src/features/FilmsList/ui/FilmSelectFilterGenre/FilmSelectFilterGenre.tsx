import { filmFilterSelectOptions } from 'features/FilmsList';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select, selectOptionsType } from 'shared/ui/Select/Select';
import cls from './FilmSelectFilterGenre.module.scss';

interface FilmSelectFilterGenreType{
    className?: string;
    onChange: (value: filmFilterSelectOptions) => void,
    filmFilterGenre: filmFilterSelectOptions
}

export const FilmSelectFilterGenre = memo((props: FilmSelectFilterGenreType) => {
    const {
        className,
        onChange,
        filmFilterGenre,
    } = props;

    const genresOptions: selectOptionsType<filmFilterSelectOptions>[] = [
        { value: filmFilterSelectOptions.all, content: 'Все' },
        { value: filmFilterSelectOptions.action, content: 'Боевик' },
        { value: filmFilterSelectOptions.adventures, content: 'Приключения' },
        { value: filmFilterSelectOptions.biography, content: 'Биография' },
        { value: filmFilterSelectOptions.comedy, content: 'Комедия' },
        { value: filmFilterSelectOptions.concert, content: 'Концерт' },
        { value: filmFilterSelectOptions.crime, content: 'Криминал' },
        { value: filmFilterSelectOptions.detective, content: 'Детектив' },
        { value: filmFilterSelectOptions.drama, content: 'Драма' },
        { value: filmFilterSelectOptions.family, content: 'Семейное' },
        { value: filmFilterSelectOptions.fantastic, content: 'Фантастика' },
        { value: filmFilterSelectOptions.fantasy, content: 'Фэнтэзи' },
    ];

    return (
        <div className={classNames(cls.filmFilterGenre, {}, [className])}>
            <Select<filmFilterSelectOptions>
                value={filmFilterGenre}
                onChange={onChange}
                options={genresOptions}
            />
        </div>
    );
});
