import { lazy } from 'react';

export const FilmDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./FilmDetailsPage'));
}));
