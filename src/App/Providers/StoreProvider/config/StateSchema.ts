import { filmSchema } from 'entities/Films';
import { filmSearchSchema } from 'entities/Films/model/types/film';
import { filmApi, filmFiltersSchema, filmSearchApi } from 'features/GetFilms';

export interface StateShema {
    filmsFilters: filmFiltersSchema;
    films: filmSchema;
    filmSearch: filmSearchSchema;
    [filmApi.reducerPath]: ReturnType<typeof filmApi.reducer>;
    [filmSearchApi.reducerPath]: ReturnType<typeof filmSearchApi.reducer>;
}
