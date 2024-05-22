import { lazy } from 'react';

export const FilmArticleAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    resolve(import('./FilmArticle'));
}));
