import { filmResponseServerType } from 'features/GetFilms';

export interface filmSchema {
    page: number,
    filmsResponse?: filmResponseServerType,
    filmsResponseSearch?: filmResponseServerType,
    isLoading: boolean,
    isFetching: boolean,
}
