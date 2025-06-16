import { filmType } from 'entities/Films';
import { FilmDetailsPage, Films, HomePage } from 'page/Films';
import { RouteObject } from 'react-router-dom';
import { MainOutlet } from 'shared/ui/MainOutlet/MainOutlet';

export enum AppRoutes{
    MAIN = 'main',
    FILMS = 'films',
    SERIES = 'series',
    CARTOONS = 'cartoons',
    FILM_DETAILS = 'film_details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FILMS]: '/films',
    [AppRoutes.SERIES]: '/series',
    [AppRoutes.CARTOONS]: '/cartoons',
    [AppRoutes.FILM_DETAILS]: '/film_details/',
};

export const childrenRouteConfig = [
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: RoutePath.films,
        element: <Films filmType={filmType.FILMS} />,
    },
    {
        path: RoutePath.series,
        element: <Films filmType={filmType.SERIALS} />,
    },
    {
        path: RoutePath.cartoons,
        element: <Films filmType={filmType.CARTOONS} />,
    },
    {
        path: `${RoutePath.film_details}:id`,
        element: <FilmDetailsPage />,
    },
];

export const RouteConfig: RouteObject[] = [
    {
        path: RoutePath.main,
        element: <MainOutlet />,
        children: childrenRouteConfig,
    },
];
