import { classNames } from 'shared/lib/classNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps{
    className?: string;
}

export default function LoaderPage({ className }: LoaderPageProps) {
    return (
        <section
            className={classNames(cls.loaderPage, {}, [className])}
        >
            <Loader />
        </section>
    );
}
