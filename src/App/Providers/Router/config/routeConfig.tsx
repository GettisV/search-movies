import { filmType } from 'entities/Films';
import { FilmDetailsPage, Films, HomePage } from 'page/Films';
import { ProfilePage } from 'page/ProfilePage';
import { RegisterPage } from 'page/SignIn/ui/RegisterPage/RegisterPage';
import { SignInPage } from 'page/SignIn/ui/SignInPage/SignInPage';
import { RouteObject } from 'react-router-dom';
import { MainOutlet } from 'shared/ui/MainOutlet/MainOutlet';

export enum AppRoutes{
    MAIN = 'main',
    FILMS = 'films',
    SERIES = 'series',
    CARTOONS = 'cartoons',
    FILM_DETAILS = 'film_details',
    SIGNIN = 'signin',
    REGISTER = 'register',
    PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FILMS]: '/films',
    [AppRoutes.SERIES]: '/series',
    [AppRoutes.CARTOONS]: '/cartoons',
    [AppRoutes.FILM_DETAILS]: '/film_details/',
    [AppRoutes.SIGNIN]: '/signin',
    [AppRoutes.REGISTER]: '/register',
    [AppRoutes.PROFILE]: '/profile',
};

export const childrenRouteConfig = [
    {
        index: true,
        element: <HomePage />,
    },
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
        path: RoutePath.signin,
        text: 'Авторизация',
        element: <SignInPage />,
    },
    {
        path: RoutePath.register,
        text: 'Регистрация',
        element: <RegisterPage />,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        element: <ProfilePage />,
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
