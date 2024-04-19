import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { childrenRoutes } from 'App/Providers/RouterProvider';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => (
    <nav className={cls.navbar}>
        {
            childrenRoutes.map(
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
