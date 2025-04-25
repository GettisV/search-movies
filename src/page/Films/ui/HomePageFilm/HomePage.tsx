import { FilmCard, filmGenreFilterSelectOptions, filmType } from 'entities/Films';
import { useGetFilmsHomePageQuery } from 'features/GetFilms';
import { memo } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomePageStyleSwiper.css';
import { Page } from 'shared/ui/Page/Page';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'App/Providers/RouterProvider';
import styles from './HomePage.module.scss';

const HomePage = memo(() => {
    const { data } = useGetFilmsHomePageQuery({
        filmType: filmType.FILMS,
        filmFilterGenre: filmGenreFilterSelectOptions.detective,
    });

    return (
        <Page className={styles.page}>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop
            >
                {data?.docs?.map((filmInfo) => (
                    <SwiperSlide key={filmInfo.id}>
                        <AppLink
                            key={filmInfo.id}
                            to={RoutePath.film_details + filmInfo.id}
                            theme={AppLinkThemes.BOX_LINK}
                        >
                            <FilmCard urlPoster={filmInfo.poster} filmInfo={filmInfo} className={styles.card} />
                        </AppLink>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Page>
    );
});

export default HomePage;
