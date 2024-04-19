import { Films } from 'page/Films';
import { RouteObject, RouteProps } from 'react-router-dom';
import { MainOutlet } from 'shared/ui/MainOutlet/MainOutlet';

export type AppRoutesProps = RouteProps;

// export enum RoutePath {
//     HOME = '/',
//     FILMS = 'films',
//     SERIES = 'series',
//     CARTOONS = 'cartoons',
// }

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
        element: <Films />,
    },
    {
        path: RoutePath.series,
        text: 'Сериалы',
        element: <Films />,
    },
    {
        path: RoutePath.cartoons,
        text: 'Мультфильмы',
        element: <Films />,
    },
];

export const RouteConfig: RouteObject[] = [
    {
        path: RoutePath.home,
        element: <MainOutlet />,
        children: childrenRouteConfig,
    },
];
