import { RoutePath } from 'App/Providers/Router';
import { FilmCard } from 'entities/Films';
import { filmResponseServerType, filmTypeResponseServer } from 'features/GetFilms';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { SwiperSlide } from 'swiper/react';

interface IOptionsSlides{
        hasPoster: boolean,
        isCardOfMainSlider?: boolean,
        isCardOfSlider?: boolean,
    }

export default function Slides(cls:string, options: IOptionsSlides, data?:filmResponseServerType) {
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
