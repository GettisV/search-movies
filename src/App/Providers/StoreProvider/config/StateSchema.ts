import { rtkApi } from 'shared/api/rtkApi';

export type StateShema = {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}
