import { ReactNode, memo } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkType{
    className?: string;
    to: string,
    children: ReactNode,
    hasActive?: boolean;
    onClick: () => void;
}

interface isActiveNavlinkArg {
    isActive: boolean
}

export const AppLink = memo((props: AppLinkType) => {
    const {
        className,
        to,
        children,
        hasActive,
        onClick,
    } = props;

    const isActiveAppLink = hasActive ? (
        (
            { isActive }: isActiveNavlinkArg,
        ) => (isActive ? `${cls.activeApplink} ${className}` : `${cls.applink} ${className}`)
    ) : '';

    return (
        <NavLink
            to={to}
            className={isActiveAppLink}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
});
