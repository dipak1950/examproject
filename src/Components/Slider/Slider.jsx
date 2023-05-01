import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Slider.css"


function Slider() {

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className='slider'>

                <SwiperSlide>
                    <img src="https://yandex-images.clstorage.net/JLSj48216/1267a1tOHiK/_XbgviRuBBN4IGJbQgPfkY2nkcy7c0CP8batuvosRkbPljrYUEmIIomoZQXBuXzd1VzyTBd14_WyMivJ6L2t2ynns6_0aZIHKOW3WULCnxba91WLrfJXyWEhuyqsbsdGzg30BY0Vxr8TYm2PHqvpyEFJ4R8X47TuKOJg1vIpNAF2N6V5Yv-Ek3m2ZhLEwJQa1KDQBOXxXkO8JLGkNmDVkV6MNk5PXcG2F2jshlFjp8rFAm4GkWk1Z-fy6xv7ILGGN_Lmu-y5AdH2OiDXAs-XUR8iHIjhcVnBcC39a3fhGpTZSvGBBtaMPlcobIPY6GVICcjtwdfgMyhpeO6UPC89jvy1rfHl8w0Z8bNv2MDLWx1QZpUA4nQcDDjsvix8oNMXUIt-jUcWCDEaoilAmKRrxY0GoUAUbvJo4T6o0X3vs42-8aOzqjCH3vA7pF5Bw12T1SyUheEwUUB8b3JovyQdVBxKtUiBXsm0G-DmQZXkIo6EBeIBnSJzaGZ-55i_afQGO3_quyW3ChHxuq-fSMvb1B2l2sgi85sI8mk57f9nG1TeiXDJDF6JNBqo6cebZmSFikhkiNzh-S1l8WgXOi28DDk_KvmmMI_R_HfimUlKEFbd6ZJAqnrdyPRrMWg649tb1gM7iECUzTBcriHEVqZsT8yJaYbe7DrtZ7agGPCnO8R9u6t77DfMWrm6559Cw19cUCUcQyYykkT74HmrdmEd2NMEeMjOXQ8-WaDlTlctbYZDCiJAVKF56qN7blc84THOeXelceS9BJL0v-gYw85Y1dZhmg3gPZ5NNCL9YnpnFFjeQb2JRBQI99Ps6IzeqOiKgQJuhZZqtSmnvq6RPya8DD54KfQhcAJWvnqtE0kMlVMYZ5YNInrSD_rq9GQ4KxFRmU6yQ86Vy_cUZKJFG6-kzcVDbcofrXLpInHnVrwjc8V4Mqs_KjVJHjB5apvHwBvd3O2cgWgzXcswKrkiN4" alt="" className='slider' width="100%" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://avatars.mds.yandex.net/i?id=819d740e817e94b6991004f5b321e21901a87b03-9068854-images-thumbs&n=13" alt="" className='slider' width="100%" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://emprendedor.com/wp-content/uploads/2021/08/20180927051618-ecommerce.jpeg" alt="" className='slider' width="100%" />
                </SwiperSlide>
            </div>
        </Swiper>
    );
};
export default Slider;
