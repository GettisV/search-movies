import { Suspense } from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import LoaderPage from 'shared/ui/LoaderPage/LoaderPage';
import { RouteConfig } from '../config/routeConfig';

export function BrowserRouterApp() {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoaderPage />}>
                <Routes>
                    {
                        RouteConfig.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element}>
                                {
                                    route.children?.map((childRoute) => (
                                        <Route
                                            key={childRoute.path || 'idx'}
                                            index={!!childRoute.index}
                                            {...childRoute.path ? { path: childRoute.path } : {}}
                                            element={childRoute.element}
                                        />
                                    ))
                                }
                            </Route>
                        ))
                    }
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
