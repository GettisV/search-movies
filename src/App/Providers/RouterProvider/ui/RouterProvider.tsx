import {
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import { RoutesConfig } from '../config/routeConfig';

export function RouterProviderApp() {
    const router = createBrowserRouter(RoutesConfig);

    return <RouterProvider router={router} />;
}
