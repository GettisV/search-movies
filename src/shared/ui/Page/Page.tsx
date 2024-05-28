import {
    MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { classNames } from 'shared/lib/classNames';
import cls from './Page.module.scss';

type paramsPageType = {
    infiniteScrollIsWork: boolean;
}

interface PageType{
    className?: string;
    children: ReactNode;
    onScrollEnd: () => void;
    paramsPage: paramsPageType;
}

export const Page = memo((props: PageType) => {
    const {
        className,
        children,
        onScrollEnd,
        paramsPage,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const elementRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        wrapperRef,
        elementRef,
        callback: onScrollEnd,
        infiniteScrollIsWork: paramsPage.infiniteScrollIsWork,
    });

    return (
        <main
            className={classNames('', {}, [className])}
            ref={wrapperRef}
        >
            {children}
            <div
                className={cls.trigger}
                ref={elementRef}
            />
        </main>
    );
});
