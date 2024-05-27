import { filmType } from 'entities/Films';
import { FilmDetailsPage, Films } from 'page/Films';
import { RouteObject } from 'react-router-dom';
import { MainOutlet } from 'shared/ui/MainOutlet/MainOutlet';

export enum AppRoutes{
    HOME = 'home',
    FILMS = 'films',
    SERIES = 'series',
    CARTOONS = 'cartoons',
    FILM_DETAILS = 'film_details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.FILMS]: '/films',
    [AppRoutes.SERIES]: '/series',
    [AppRoutes.CARTOONS]: '/cartoons',
    [AppRoutes.FILM_DETAILS]: '/film_details/',
};

export const childrenRouteConfig = [
    {
        path: RoutePath.films,
        text: 'Фильмы',
        element: <Films filmType={filmType.FILMS} />,
        navbar: true,
    },
    {
        path: RoutePath.series,
        text: 'Сериалы',
        element: <Films filmType={filmType.SERIALS} />,
        navbar: true,
    },
    {
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
        path: RoutePath.home,
        element: <MainOutlet />,
        children: childrenRouteConfig,
    },
];
