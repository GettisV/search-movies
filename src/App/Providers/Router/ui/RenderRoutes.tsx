import { Route, RouteObject } from 'react-router-dom';
import ChildrenRoutes from './ChildrenRoutes';

interface IProps{
    config: RouteObject[]
}

export default function RenderRoutes({ config }: IProps) {
    return (
        config.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}>
                <ChildrenRoutes routes={route?.children ? route.children : []} />
            </Route>
        ))
    );
}
