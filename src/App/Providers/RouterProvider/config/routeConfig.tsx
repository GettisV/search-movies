import { filmType } from 'entities/Films';
import { Films } from 'page/Films';
import { RouteObject } from 'react-router-dom';
import { MainOutlet } from 'shared/ui/MainOutlet/MainOutlet';

export enum AppRoutes{
    HOME = 'home',
    FILMS = 'films',
    SERIES = 'series',
    CARTOONS = 'cartoons',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.FILMS]: '/films',
    [AppRoutes.SERIES]: '/series',
    [AppRoutes.CARTOONS]: '/cartoons',
};

export const childrenRouteConfig = [
    {
        path: RoutePath.films,
        text: 'Фильмы',
        element: <Films filmType={filmType.FILMS} />,
    },
    {
        path: RoutePath.series,
        text: 'Сериалы',
        element: <Films filmType={filmType.SERIALS} />,
    },
    {
        path: RoutePath.cartoons,
        text: 'Мультфильмы',
        element: <Films filmType={filmType.CARTOONS} />,
    },
];

export const RouteConfig: RouteObject[] = [
    {
        path: RoutePath.home,
        element: <MainOutlet />,
        children: childrenRouteConfig,
    },
];
