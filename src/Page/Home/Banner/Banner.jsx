import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const Banner = () => {
    return (

        <div>
            {/* 
           



            */}
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/XDb5dsf/c132f012226563-5630fb3f36e6f.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/2c3xpGs/65ac06543aa7bee4c6bbceb549e31838.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/Hz02dmH/https-verbling-user-uploads-s3-amazonaws-com-75736031415276259819-134fe6d9-35f7-49f7-9088-00d21599e5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[83vh] w-full object-cover' src="https://i.ibb.co.com/Hr5xXQg/30b6796307f2545e37cce9fa8c5f4d59.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;