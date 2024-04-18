import { NavLink } from 'react-router-dom';
import { memo } from 'react';
import cls from './Navbar.module.scss';

export const Navbar = memo(() => (
    <nav className={cls.navbar}>
        <NavLink
            to="/film"
            className={({ isActive }) => (isActive ? cls.activeNavlink : cls.navlink)}
        >
            Фильмы
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? cls.activeNavlink : cls.navlink)}
        >
            Сериалы
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? cls.activeNavlink : cls.navlink)}
        >
            Мультфильмы
        </NavLink>
    </nav>
));
