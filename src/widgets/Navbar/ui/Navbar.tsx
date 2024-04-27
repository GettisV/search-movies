import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { childrenRouteConfig } from 'App/Providers/RouterProvider';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => (
    <nav className={cls.navbar}>
        {
            childrenRouteConfig.map(
                (route) => (
                    <AppLink
                        to={route.path}
                        key={route.path}
                        text={route.text}
                    />
                ),
            )
        }
    </nav>
));
