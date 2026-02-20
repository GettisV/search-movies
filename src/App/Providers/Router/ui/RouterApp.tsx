import { RouteObject, useRoutes } from 'react-router-dom';

interface IProps{
    routeConfig: RouteObject[]
}

export default function RouterApp({ routeConfig }:IProps) {
    return useRoutes(routeConfig);
}
