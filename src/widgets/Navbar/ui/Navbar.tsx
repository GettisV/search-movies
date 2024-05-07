import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { childrenRouteConfig } from 'App/Providers/RouterProvider';
import Search from 'shared/assets/icons/search.svg';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => (
    <nav className={cls.navbar}>
        <div className={cls.applinks}>
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
        </div>
        <div className={cls.searchContainer}>
            <input className={cls.searchInput} type="text" />
            <Search className={cls.searchImg} />
        </div>
    </nav>
));
