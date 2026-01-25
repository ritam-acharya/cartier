
import { useRef, useState } from "react";
import Header from "../Header/Header";
import PlusIcon from "./PlusIcon";
import VideoContainer from "./VideoComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

// Import Swiper styles
import '../../../../node_modules/swiper/swiper.css';
import '../../../../node_modules/swiper/modules/pagination.css';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useScroll, useTransform } from "framer-motion";

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper: any) => {
        setCurrentSlide(swiper.realIndex);
    } 

    const container = useRef<HTMLDivElement>(null);
    const parentContainer = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: parentContainer,
        offset: ['start start', 'end 0.85']
    });

    const opacity = useTransform(scrollYProgress, [0,1], [1,0]);
    return (
        <div ref={parentContainer} className="bg-[#010202] w-full h-auto relative  ">
            {/**  header  */}
            <Header container={container} />
            <div className=" w-full h-auto md:h-[130vh]   relative flex flex-col justify-between pt-24 md:pt-10 ">
                {/**  top text  */}
                <h2 ref={container} className=" h-auto text-[66px] md:text-[80px] lg:text-[100px] w-full text-center md:max-w-[50%] lg:max-w-[100%] text-white leading-[52px] md:leading-[70px] tracking-normal md:text-left lg:text-right pt-8 md:pt-16  md:pl-8 lg:pr-16 lg:pt-10 monu-medium ">Strictly inventive</h2>
                {/**  add icon  */}
                <PlusIcon container={parentContainer} />
                {/**  bottom div with video  **/}
                <div className=" pt-10 mt-[200px] flex-1 relative flex items-center">
                    <div className="h-full  w-full overflow-hidden flex ">
                        <Swiper
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                                centeredSlides: false,
                            }
                        }}
                        onSlideChange={handleSlideChange}
                        centeredSlides={true}
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="myswiper h-full w-full overflow-hidden flex"
                    >
                        <SwiperSlide ><VideoContainer src="./videos/hero-video1.mp4" currentIndex={currentSlide} idx={0} /></SwiperSlide>
                        <SwiperSlide ><VideoContainer src="./videos/hero-video2.mp4" currentIndex={currentSlide} idx={1} /></SwiperSlide>
                        <SwiperSlide ><VideoContainer src="./videos/hero-video3.mp4" currentIndex={currentSlide} idx={2} /></SwiperSlide>
                        <SwiperSlide ><VideoContainer src="./videos/hero-video4.mp4" currentIndex={currentSlide} idx={3} /></SwiperSlide>
                    </Swiper>
                    </div>
                    <motion.div 
                    style={{opacity}}
                    transition={{
                        duration: 0.5,
                        ease: [0.64, 0, 0.24, 1] as const
                    }}
                    className="absolute left-2 md:left-10 -top-20  text-white h-auto w-auto  md:max-w-[360px] leading-tight flex items-start monu-regular font-medium justify-start gap-3 flex-col text-lg px-4  ">
                        <p>IDEAS THAT TRANSFORM</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We create inventive and sustainable solutions based on a creative and collaborative equation.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero