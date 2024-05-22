import { StateShema } from 'App/Providers/StoreProvider/config/StateSchema';

export const getFilmsSearchResponse = (state:StateShema) => state.filmSearch.filmsSearchResponse;
export const getFilmsSearchIsLoading = (state:StateShema) => state.filmSearch.isLoading;
export const getFilmsSearchIsFetching = (state:StateShema) => state.filmSearch.isFetching;
export const getFilmsSearchIsSuccess = (state:StateShema) => state.filmSearch.isSuccess;
