import { RoutePath } from 'App/Providers/Router';

const getNavbarItemsMenu = () => [
    {
        path: RoutePath.films,
        text: 'Фильмы',
    },
    {
        path: RoutePath.series,
        text: 'Сериалы',
    },
    {
        path: RoutePath.cartoons,
        text: 'Мультфильмы',
    },
];

export default getNavbarItemsMenu;
