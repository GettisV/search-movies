import { filmSchema } from 'entities/Films';
import { filmFiltersSchema } from 'features/GetFilms';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateShema {
    filmsFilters: filmFiltersSchema;
    films: filmSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
