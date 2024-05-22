import { StateShema } from 'App/Providers/StoreProvider/config/StateSchema';

export const getPage = (state:StateShema) => state.films.page;
export const getIsLoading = (state:StateShema) => state.films.isLoading;
export const getIsFetching = (state:StateShema) => state.films.isFetching;
export const getIsSuccess = (state:StateShema) => state.films.isSuccess;
export const getFilmsResponse = (state:StateShema) => state.films.filmsResponse;
export const getFilmsResponseSearch = (state:StateShema) => state.films.filmsResponseSearch;
