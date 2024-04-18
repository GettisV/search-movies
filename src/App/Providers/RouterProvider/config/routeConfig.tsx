import { Film } from 'page/Film';
import { RouteObject } from 'react-router-dom';
import MainOutlet from 'shared/ui/MainOutlet/MainOutlet';

enum RoutePath {
    HOME = '/',
    FILM = 'film'
}

export const RouteConfig: RouteObject[] = [
    {
        path: RoutePath.HOME,
        element: <MainOutlet />,
        children: [
            {
                path: RoutePath.FILM,
                element: <Film />,
            },
        ],
    },
];
