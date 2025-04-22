import { lazy } from 'react';

export const HomePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./HomePage'));
}));
