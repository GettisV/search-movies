export enum filmType {
    FILMS = 'movie',
    SERIALS = 'tv-series',
    CARTOONS = 'cartoon',
}

export enum filmSortSelectOptions{
    ratingBy = 'rating.kp',
    dateBy = 'releaseYears.start',
}

export enum filmFilterSelectOptions{
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

export interface filmFiltersSchema{
    filmSelectSort: filmSortSelectOptions;
    filmSelectGenreFilter: filmFilterSelectOptions;
    filmSelectСountriesFilter: string;
    filmSelectReleasedFilter: string;
}
