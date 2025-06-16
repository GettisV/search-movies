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
        key: filmType.FILMS,
        path: RoutePath.films,
        text: 'Фильмы',
        element: <Films filmType={filmType.FILMS} />,
        navbar: true,
    },
    {
        key: filmType.SERIALS,
        path: RoutePath.series,
        text: 'Сериалы',
        element: <Films filmType={filmType.SERIALS} />,
        navbar: true,
    },
    {
        key: filmType.CARTOONS,
        path: RoutePath.cartoons,
        text: 'Мультфильмы',
        element: <Films filmType={filmType.CARTOONS} />,
        navbar: true,
    },
    {
        path: `${RoutePath.film_details}:id`,
        text: '',
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
