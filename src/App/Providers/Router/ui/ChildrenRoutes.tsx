import { Route, RouteObject } from 'react-router-dom';

interface IProps{
    routes: RouteObject[]
}

export default function ChildrenRoutes({ routes }: IProps) {
    return (
        routes.map((childRoute) => (
            <Route
                key={childRoute.path || 'idx'}
                index={!!childRoute.index}
                path={childRoute.path}
                element={childRoute.element}
            />
        ))

    );
}
