import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { filmReducer, filmSearchReducer } from 'entities/Films';
import { filmsFiltersReducer, filmApi, filmSearchApi } from 'features/GetFilms';
import { DB_API } from 'shared/api/db-api/db-api';
import { StateShema } from './StateSchema';
import { errorMiddleware } from './errorMiddleware';

const rootReducer: ReducersMapObject<StateShema> = {
    films: filmReducer,
    filmSearch: filmSearchReducer,
    filmsFilters: filmsFiltersReducer,
    [filmApi.reducerPath]: filmApi.reducer,
    [filmSearchApi.reducerPath]: filmSearchApi.reducer,
    [DB_API.reducerPath]: DB_API.reducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        filmApi.middleware,
        filmSearchApi.middleware,
        DB_API.middleware,
        errorMiddleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
