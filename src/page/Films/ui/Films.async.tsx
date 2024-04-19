import { lazy } from 'react';

export const FilmsAsync = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./Films'));
    }, 1000);
}));
