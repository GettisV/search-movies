import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import Auth from 'features/Auth/ui/Auth';

interface SignInPageType{
    className?: string;
}

export const SignInPage = memo((props: SignInPageType) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Auth />
        </div>
    );
});
