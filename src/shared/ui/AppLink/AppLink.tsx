import { ReactNode, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkThemes{
    APP_LINK = 'appLink',
    BOX_LINK = 'boxLink',
}

interface AppLinkType{
    className?: string;
    to: string;
    children: ReactNode;
    hasActive?: boolean;
    onClick?: () => void;
    theme: AppLinkThemes;
}

interface isActiveNavlinkArg {
    isActive: boolean;
}

export const AppLink = memo((props: AppLinkType) => {
    const {
        className,
        to,
        children,
        hasActive,
        onClick,
        theme = AppLinkThemes.APP_LINK,
    } = props;

    const classNameAppLink = hasActive
        ? (
            { isActive }: isActiveNavlinkArg,
        ) => (
            isActive
                ? classNames(cls.activeAppLink, {}, [className])
                : classNames(cls[AppLinkThemes.APP_LINK], {}, [className])

        )
        : classNames(cls[theme], {}, [className]);

    return (
        <NavLink
            to={to}
            className={classNameAppLink}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
});
