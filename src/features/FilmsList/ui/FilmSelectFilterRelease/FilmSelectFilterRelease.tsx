import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/Select/Select';
import { filmReleaseFilterSelectOptions } from '../../model/types/filmFiltersTypes';
import cls from './FilmSelectFilterRelease.module.scss';

interface FilmSelectFilterReleaseType{
    className?: string;
    onChange: (value: string) => void,
    filmFilterRelease: string
}

export const FilmSelectFilterRelease = memo((props: FilmSelectFilterReleaseType) => {
    const {
        className,
        onChange,
        filmFilterRelease,
    } = props;

    const releaseOptions = [
        { value: filmReleaseFilterSelectOptions.all, content: 'Все года' },
        { value: filmReleaseFilterSelectOptions[2024], content: '2024' },
        { value: filmReleaseFilterSelectOptions[2022], content: '2022' },
        { value: filmReleaseFilterSelectOptions[2021], content: '2021' },
        { value: filmReleaseFilterSelectOptions[2020], content: '2020' },
        { value: filmReleaseFilterSelectOptions['2010-2019'], content: '2010-2019' },
        { value: filmReleaseFilterSelectOptions['2000-2009'], content: '2000-2009' },
        { value: filmReleaseFilterSelectOptions['1990-1999'], content: '1990-1999' },
        { value: filmReleaseFilterSelectOptions['1980-1989'], content: '1980-1989' },
        { value: filmReleaseFilterSelectOptions['1874-1980'], content: 'до 1980' },
    ];

    return (
        <div className={classNames(cls.filmFilterRelease, {}, [className])}>
            <Select<string>
                value={filmFilterRelease}
                onChange={onChange}
                options={releaseOptions}
            />
        </div>
    );
});
