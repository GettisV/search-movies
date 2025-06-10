import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { filmApi } from 'features/GetFilms';
import { StateShema } from './StateSchema';

const rootReducer: ReducersMapObject<StateShema> = {
    [filmApi.reducerPath]: filmApi.reducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware().concat(
            filmApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
