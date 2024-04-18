import { lazy } from 'react';

export const FilmAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./Film'));
    }, 1000);
}));
