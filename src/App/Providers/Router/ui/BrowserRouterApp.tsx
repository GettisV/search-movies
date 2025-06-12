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
                            <Route
                                path={route.path}
                                key={route.path || `key${Math.random() * 1e6}`}
                                element={route.element}
                            >
                                {
                                    route.children?.map((route) => {
                                        const index = !!(route.index && route.index);

                                        return (
                                            <Route
                                                index={index}
                                                key={route.path || `key${Math.random() * 1e6}`}
                                                path={route.path}
                                                element={route.element}
                                            />
                                        );
                                    })
                                }
                            </Route>
                        ))
                    }
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
