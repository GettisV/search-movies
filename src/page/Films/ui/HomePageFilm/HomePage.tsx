import { filmGenreFilterSelectOptions, filmType } from 'entities/Films';
import { useGetFilmsHomePageQuery } from 'features/GetFilms';
import { memo } from 'react';
import {
    Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// const { data } = useGetFilmsHomePageQuery({
//     filmType: filmType.FILMS,
//     filmFilterGenre: filmGenreFilterSelectOptions.detective,
// });
const HomePage = memo(() => (
    // <Swiper
    //     spaceBetween={50}
    //     slidesPerView={3}
    //     onSlideChange={() => console.log('slide change')}
    //     onSwiper={(swiper) => console.log(swiper)}
    // >
    //     <SwiperSlide>Slide 1</SwiperSlide>
    //     <SwiperSlide>Slide 2</SwiperSlide>
    //     <SwiperSlide>Slide 3</SwiperSlide>
    //     <SwiperSlide>Slide 4</SwiperSlide>
    // </Swiper>
    <div>1</div>
));

export default HomePage;
