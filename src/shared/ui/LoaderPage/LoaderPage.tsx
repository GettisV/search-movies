import { ClassNames } from 'shared/lib/ClassNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps{
    className?: string;
}

export default function LoaderPage({ className }: LoaderPageProps) {
    return (
        <section
            className={ClassNames(cls.loaderPage, {}, [className])}
        >
            <Loader />
        </section>
    );
}
