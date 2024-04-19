import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkType{
    className?: string;
    to: string,
    text:string,
}

interface isActiveNavlinkArg {
    isActive: boolean
}

export const AppLink = memo((props: AppLinkType) => {
    const {
        className,
        to,
        text,
    } = props;

    const isActiveAppLink = (
        { isActive }: isActiveNavlinkArg,
    ) => (isActive ? `${cls.activeApplink} ${className}` : `${cls.applink} ${className}`);

    return (
        <NavLink
            to={to}
            className={isActiveAppLink}
        >
            {text}
        </NavLink>
    );
});
