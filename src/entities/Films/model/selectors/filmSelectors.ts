import { StateShema } from 'App/Providers/StoreProvider/config/StateSchema';

export const getPage = (state:StateShema) => state.films.page;
export const getFilmsResponse = (state:StateShema) => state.films.filmsResponse;
export const getFilmsIsLoading = (state:StateShema) => state.films.isLoading;
export const getFilmsIsFetching = (state:StateShema) => state.films.isFetching;
export const getFilmsIsSuccess = (state:StateShema) => state.films.isSuccess;
