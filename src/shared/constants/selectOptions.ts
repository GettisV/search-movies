import {
    filmCountriesFilterSelectOptions, filmGenreFilterSelectOptions, filmReleaseFilterSelectOptions, filmSortSelectOptions,
} from 'entities/Films';
import { selectOptionsType } from 'shared/ui/Select/Select';

export const genresOptions: selectOptionsType<filmGenreFilterSelectOptions>[] = [
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

export const sortOptions: selectOptionsType<filmSortSelectOptions>[] = [
    { value: filmSortSelectOptions.dateBy, content: 'По дате' },
    { value: filmSortSelectOptions.ratingBy, content: 'По рейтингу' },
];

export const countriesOptions: selectOptionsType<filmCountriesFilterSelectOptions>[] = [
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

export const releaseOptions = [
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
