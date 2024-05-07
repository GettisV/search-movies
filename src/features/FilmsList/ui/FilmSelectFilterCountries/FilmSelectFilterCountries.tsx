import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Select, selectOptionsType } from 'shared/ui/Select/Select';
import { filmCountriesFilterSelectOptions } from '../../model/types/filmFiltersTypes';
import cls from './FilmSelectFilterCountries.module.scss';

interface FilmSelectFilterCountriesType{
    className?: string;
    onChange: (value: filmCountriesFilterSelectOptions) => void,
    filmFilterCountry: filmCountriesFilterSelectOptions
}

export const FilmSelectFilterCountries = memo((props: FilmSelectFilterCountriesType) => {
    const {
        className,
        onChange,
        filmFilterCountry,
    } = props;

    const countriesOptions: selectOptionsType<filmCountriesFilterSelectOptions>[] = [
        { value: filmCountriesFilterSelectOptions.all, content: 'Все страны' },
        { value: filmCountriesFilterSelectOptions.belarus },
        { value: filmCountriesFilterSelectOptions.canada },
        { value: filmCountriesFilterSelectOptions.china },
        { value: filmCountriesFilterSelectOptions.czechRepublic },
        { value: filmCountriesFilterSelectOptions.finland },
        { value: filmCountriesFilterSelectOptions.france },
        { value: filmCountriesFilterSelectOptions.georgia },
        { value: filmCountriesFilterSelectOptions.germany },
        { value: filmCountriesFilterSelectOptions.greatBritain },
        { value: filmCountriesFilterSelectOptions.greece },
        { value: filmCountriesFilterSelectOptions.hungary },
        { value: filmCountriesFilterSelectOptions.india },
        { value: filmCountriesFilterSelectOptions.indonesia },
        { value: filmCountriesFilterSelectOptions.iran },
        { value: filmCountriesFilterSelectOptions.israel },
        { value: filmCountriesFilterSelectOptions.italy },
        { value: filmCountriesFilterSelectOptions.japan },
        { value: filmCountriesFilterSelectOptions.kazakhstan },
        { value: filmCountriesFilterSelectOptions.netherlands },
        { value: filmCountriesFilterSelectOptions.newZealands },
        { value: filmCountriesFilterSelectOptions.norway },
        { value: filmCountriesFilterSelectOptions.poland },
        { value: filmCountriesFilterSelectOptions.russia },
        { value: filmCountriesFilterSelectOptions.southKorea },
        { value: filmCountriesFilterSelectOptions.spain },
        { value: filmCountriesFilterSelectOptions.sweden },
        { value: filmCountriesFilterSelectOptions.switzerland },
        { value: filmCountriesFilterSelectOptions.taiwan },
        { value: filmCountriesFilterSelectOptions.turkey },
        { value: filmCountriesFilterSelectOptions.ukraine },
        { value: filmCountriesFilterSelectOptions.usa },
        { value: filmCountriesFilterSelectOptions.ussr },
    ];

    return (
        <div className={classNames(cls.filmFilterCountry, {}, [className])}>
            <Select<filmCountriesFilterSelectOptions>
                value={filmFilterCountry}
                onChange={onChange}
                options={countriesOptions}
            />
        </div>
    );
});
