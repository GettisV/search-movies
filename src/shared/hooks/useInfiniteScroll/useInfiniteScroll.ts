import { MutableRefObject, useEffect } from 'react';

interface infiniteScrollProps{
    wrapperRef: MutableRefObject<HTMLElement>,
    elementRef: MutableRefObject<HTMLElement>,
    callback?: () => void,
    infiniteScrollIsWork: boolean,
}

export const useInfiniteScroll = ({
    wrapperRef,
    elementRef,
    callback,
    infiniteScrollIsWork,
}: infiniteScrollProps) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        const wrapperElement = wrapperRef.current;
        const triggerElement = elementRef.current;

        if (infiniteScrollIsWork) {
            if (callback) {
                const options: IntersectionObserverInit = {
                    // root: wrapperElement,
                    rootMargin: '0px',
                    threshold: 1.0,
                };
                observer = new IntersectionObserver(([entry]) => {
                    if (entry?.isIntersecting) {
                        callback();
                    }
                }, options);

                observer.observe(triggerElement);
            }
        }

        return () => {
            if (observer && triggerElement) {
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, elementRef, infiniteScrollIsWork, wrapperRef]);
};
