import { memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames';
import { Select } from 'shared/ui/Select/Select';
import cls from './FilmFilters.module.scss';
import { sortSelectOptions } from '../model/types/FIlmFiltersTypes';

interface FilmFiltersType{
    className?: string;
}

export const FilmFilters = memo((props: FilmFiltersType) => {
    const {
        className,
    } = props;

    const sortOptions: sortSelectOptions[] = [
        sortSelectOptions.dateBy,
        sortSelectOptions.ratingBy,
    ];

    return (
        <div className={ClassNames(cls.filmFilters, {}, [className])}>
            <Select onChange={} options={sortOptions} className="" />
        </div>
    );
});
