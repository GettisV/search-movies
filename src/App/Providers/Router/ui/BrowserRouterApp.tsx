import { Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
} from 'react-router-dom';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { RouteConfig } from '../config/routeConfig';
import RenderRoutes from './RenderRoutes';

export function BrowserRouterApp() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoaderPage />}>
                <Routes>
                    <RenderRoutes config={RouteConfig} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
