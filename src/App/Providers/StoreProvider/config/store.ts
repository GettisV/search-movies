import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { rtkApi } from 'shared/api/rtkApi';
import { StateShema } from './StateSchema';

const rootReducer: ReducersMapObject<StateShema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
