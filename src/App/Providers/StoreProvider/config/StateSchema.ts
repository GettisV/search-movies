import { filmSchema } from 'entities/Films';
import { filmSearchSchema } from 'entities/Films/model/types/film';
import { filmFiltersSchema } from 'features/GetFilms';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateShema {
    filmsFilters: filmFiltersSchema;
    films: filmSchema;
    filmSearch: filmSearchSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
