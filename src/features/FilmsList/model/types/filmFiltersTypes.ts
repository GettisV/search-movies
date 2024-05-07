export enum filmType {
    FILMS = 'movie',
    SERIALS = 'tv-series',
    CARTOONS = 'cartoon',
}

export enum filmSortSelectOptions{
    ratingBy = 'rating.kp',
    dateBy = 'releaseYears.start',
}

export enum filmGenreFilterSelectOptions{
    all = '',
    biography = 'биография',
    action = 'боевик',
    military = 'военный',
    detective = 'детектив',
    drama = 'драма',
    history = 'история',
    comedy = 'комедия',
    concert = 'концерт',
    crime = 'криминал',
    melodrama = 'мелодрама',
    adventures = 'приключения',
    family = 'семейный',
    horror = 'ужасы',
    fantastic = 'фантастика',
    fantasy = 'фэнтези'
}

export enum filmCountriesFilterSelectOptions{
    all = '',
    russia = 'Россия',
    ussr = 'СССР',
    usa = 'США',
    france = 'Франция',
    italy = 'Италия',
    spain = 'Испания',
    greatBritain = 'Великобритания',
    germany = 'Германия',
    southKorea = 'Южная Корея',
    japan = 'Япония',
    belarus = 'Белоруссия',
    hungary = 'Венгрия',
    greece = 'Греция',
    georgia = 'Грузия',
    israel = 'Израиль',
    india ='Индия',
    indonesia = 'Индонезия',
    iran = 'Иран',
    kazakhstan = 'Казахстан',
    canada = 'Канада',
    china = 'Китай',
    netherlands = 'Нидерланды',
    newZealands = 'Новая Зеландия',
    norway = 'Норвегия',
    poland = 'Польша',
    taiwan = 'Тайвань',
    turkey = 'Турция',
    ukraine = 'Украина',
    finland = 'Финляндия',
    czechRepublic = 'Чехия',
    switzerland = 'Швейцария',
    sweden = 'Швеция'
}

export const filmReleaseFilterSelectOptions = {
    all: '',
    2024: '2024',
    2022: '2022',
    2021: '2021',
    2020: '2020',
    '2010-2019': '2010-2019',
    '2000-2009': '2000-2009',
    '1990-1999': '1990-1999',
    '1980-1989': '1980-1989',
    '1874-1980': '1874-1980',
};

export interface filmFiltersSchema{
    filmSelectSort: filmSortSelectOptions;
    filmSelectGenreFilter: filmGenreFilterSelectOptions;
    filmSelectСountriesFilter: filmCountriesFilterSelectOptions;
    filmSelectReleasedFilter: string;
}
