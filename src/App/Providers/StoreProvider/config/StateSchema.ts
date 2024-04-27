import { filmFiltersSchema } from 'features/FilmsList';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateShema {
    filmsList: filmFiltersSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}
