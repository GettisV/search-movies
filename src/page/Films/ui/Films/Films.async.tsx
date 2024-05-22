import { lazy } from 'react';

export const FilmsAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./Films'));
}));
