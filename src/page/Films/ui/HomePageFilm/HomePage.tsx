import { RoutePath } from 'App/Providers/Router';
import { FilmCard, filmGenreFilterSelectOptions, filmType } from 'entities/Films';
import { filmResponseServerType, filmTypeResponseServer, useGetFilmsHomePageQuery } from 'features/GetFilms';
import { memo } from 'react';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { Page } from 'shared/ui/Page/Page';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HomePage.module.scss';
import './HomePageStyleSwiper.css';

const HomePage = memo(() => {
    // const { data: mainDataSlider } = useGetFilmsHomePageQuery({
    //     filmType: filmType.FILMS,
    // });

    // const { data: detectiveDataSlider } = useGetFilmsHomePageQuery({
    //     filmFilterGenre: filmGenreFilterSelectOptions.detective,
    // });

    // const { data: historyDataSlider } = useGetFilmsHomePageQuery({
    //     filmFilterGenre: filmGenreFilterSelectOptions.history,
    // });

    // const { data: horrorDataSlider } = useGetFilmsHomePageQuery({
    //     filmFilterGenre: filmGenreFilterSelectOptions.horror,
    // });

    interface IOptionsSlides{
        hasPoster: boolean,
        isCardOfMainSlider?: boolean,
        isCardOfSlider?: boolean,
    }

    function Slides(cls:string, options: IOptionsSlides, data?:filmResponseServerType) {
        return data?.docs?.map((filmInfo: filmTypeResponseServer) => (
            <SwiperSlide key={filmInfo.id}>
                <AppLink
                    key={filmInfo.id}
                    to={RoutePath.film_details + filmInfo.id}
                    theme={AppLinkThemes.BOX_LINK}
                >
                    <FilmCard
                        urlPoster={options.hasPoster ? filmInfo.poster : filmInfo.backdrop}
                        filmInfo={filmInfo}
                        className={cls}
                        isCardOfMainSlider={options.isCardOfMainSlider}
                        isCardOfSlider={options.isCardOfSlider}
                    />
                </AppLink>
            </SwiperSlide>
        ));
    }

    return (
        <Page className={styles.page}>
            {/* <Swiper
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
            </Swiper> */}
            <div>12</div>
        </Page>
    );
});

export default HomePage;
