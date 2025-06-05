import { Suspense } from 'react';
import {
    BrowserRouter,
} from 'react-router-dom';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { RouteConfig } from '../config/routeConfig';
import RouterApp from './RouterApp';

export function BrowserRouterApp() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoaderPage />}>
                <RouterApp routeConfig={RouteConfig} />
            </Suspense>
        </BrowserRouter>
    );
}
