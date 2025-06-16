import { filmGenreFilterSelectOptions } from 'entities/Films';
import { filmHomeArg, useGetFilmsHomePageQuery } from 'features/GetFilms';
import { memo } from 'react';
import getCurrentYear from 'shared/lib/getCurrentYear';
import { Page } from 'shared/ui/Page/Page';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import styles from './HomePage.module.scss';
import './HomePageStyleSwiper.css';
import Slides from './Slides/Slides';

const HomePage = memo(() => {
    const additionalParams:filmHomeArg = {
        limit: 10,
        notNullFields: 'poster.url',
        'rating.kp': '5.5-10',
        'votes.kp': '10000-6666666',
        year: getCurrentYear(),
    };
    const { data: mainDataSlider } = useGetFilmsHomePageQuery({
        ...additionalParams,
    });
    const { data: detectiveDataSlider } = useGetFilmsHomePageQuery({
        'genres.name': filmGenreFilterSelectOptions.detective,
        ...additionalParams,
    });
    const { data: historyDataSlider } = useGetFilmsHomePageQuery({
        'genres.name': filmGenreFilterSelectOptions.history,
        ...additionalParams,
    });
    const { data: horrorDataSlider } = useGetFilmsHomePageQuery({
        'genres.name': filmGenreFilterSelectOptions.horror,
        ...additionalParams,
    });

    return (
        <Page className={styles.page}>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                className={styles.mainSwiper}
                navigation
                loop
            >
                { Slides(styles.mainCard || '', { isCardOfMainSlider: true, hasPoster: false }, mainDataSlider) }
            </Swiper>

            <h2>Детективы</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                className={styles.swiper}
                loop
            >
                { Slides(styles.card || '', { isCardOfSlider: true, hasPoster: true }, detectiveDataSlider) }
            </Swiper>

            <h2>История</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                className={styles.swiper}
                loop
            >
                { Slides(styles.card || '', { isCardOfSlider: true, hasPoster: true }, historyDataSlider) }
            </Swiper>

            <h2>Ужасы</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                className={styles.swiper}
                loop
            >
                { Slides(styles.card || '', { isCardOfSlider: true, hasPoster: true }, horrorDataSlider) }
            </Swiper>
        </Page>
    );
});

export default HomePage;
