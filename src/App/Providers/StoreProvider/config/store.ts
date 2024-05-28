import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { filmReducer, filmSearchReducer } from 'entities/Films';
import { filmsFiltersReducer, filmApi, filmSearchApi } from 'features/GetFilms';
import { StateShema } from './StateSchema';

const rootReducer: ReducersMapObject<StateShema> = {
    films: filmReducer,
    filmSearch: filmSearchReducer,
    filmsFilters: filmsFiltersReducer,
    [filmApi.reducerPath]: filmApi.reducer,
    [filmSearchApi.reducerPath]: filmSearchApi.reducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware().concat(
            filmApi.middleware,
            filmSearchApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
