import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select, selectOptionsType } from 'shared/ui/Select/Select';
import { filmSortSelectOptions } from '../../model/types/filmFiltersTypes';
import cls from './FilmSelectSort.module.scss';

interface FilmSelectSortType{
    className?: string;
    onChange: (value: filmSortSelectOptions) => void,
    filmSort: filmSortSelectOptions;
}

export const FilmSelectSort = memo((props: FilmSelectSortType) => {
    const {
        className,
        onChange,
        filmSort,
    } = props;

    const sortOptions: selectOptionsType<filmSortSelectOptions>[] = [
        { value: filmSortSelectOptions.dateBy, content: 'По дате' },
        { value: filmSortSelectOptions.ratingBy, content: 'По рейтингу' },
    ];

    return (
        <div>
            <Select<filmSortSelectOptions>
                className={classNames(cls.filmSelectSort, {}, [className])}
                value={filmSort}
                onChange={onChange}
                options={sortOptions}
            />
        </div>
    );
});
