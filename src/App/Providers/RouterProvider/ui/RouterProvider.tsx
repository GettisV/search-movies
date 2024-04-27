import {
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';

export function RouterProviderApp() {
    const router = createBrowserRouter(RouteConfig);

    return <RouterProvider router={router} />;
}
