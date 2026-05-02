import { filmSchema } from 'entities/Films';
import { filmSearchSchema } from 'entities/Films/model/types/film';
import { filmApi, filmFiltersSchema, filmSearchApi } from 'features/GetFilms';
import { DB_API } from 'shared/api/db-api/db-api';

export interface StateShema {
    filmsFilters: filmFiltersSchema;
    films: filmSchema;
    filmSearch: filmSearchSchema;
    [filmApi.reducerPath]: ReturnType<typeof filmApi.reducer>;
    [filmSearchApi.reducerPath]: ReturnType<typeof filmSearchApi.reducer>;
    [DB_API.reducerPath]: ReturnType<typeof DB_API.reducer>;
}
