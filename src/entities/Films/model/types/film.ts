import { filmResponseServerType } from 'features/GetFilms';

export interface filmSchema {
    page: number,
    filmsResponse?: filmResponseServerType,
    isLoading: boolean,
    isFetching: boolean,
    isSuccess: boolean,
}

export interface filmSearchSchema {
    filmsSearchResponse?: filmResponseServerType,
    isLoading: boolean,
    isFetching: boolean,
    isSuccess: boolean,
}
