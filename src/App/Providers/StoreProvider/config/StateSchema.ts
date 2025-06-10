import { filmApi } from 'features/GetFilms';

export interface StateShema {
    [filmApi.reducerPath]: ReturnType<typeof filmApi.reducer>;
}
