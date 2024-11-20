import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const Banner = () => {
    return (

        <div className='z-0'>



            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/frb7PvM/pngtree-ramadan-islamic-background-white-and-blue-with-arabic-pattern-and-lantern-image-15577435.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className=' h-[83vh] w-full object-cover' src="https://i.ibb.co.com/GvDCzRP/pngtree-3d-rendering-blue-color-mosque-ramadan-kareem-image-15566876.png" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/gv5B7bj/arabic-ldmcasap92k9j747.jpghttps://i.ibb.co.com/Hz02dmH/https-verbling-user-uploads-s3-amazonaws-com-75736031415276259819-134fe6d9-35f7-49f7-9088-00d21599e5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/Hr5xXQg/30b6796307f2545e37cce9fa8c5f4d59.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;